// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['Marina', 'Agata', 'Hanna', 'Alina', 'Helen'];

function checkString(arr) {
    let resultcheck = arr.every(function (el) {
        if (isNaN(el)) {
            return true
        }
    })
    return resultcheck
}

function getSum(arr) {
    const check = checkString(arr)
    if (check == true) {
        let result = arr.reduce(function (sum, elem) {
            return sum +' '+ elem
        }, '')
        return result
    }
}
let sum = getSum(arr);
console.log(sum);