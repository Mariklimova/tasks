// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['Marina', 'Agata', 'Hanna', 'Alina', 'Helen'];


// 1
// function checkString(arr) {
//     const resultcheck = arr.every(function (el) {
//         if (isNaN(el)) {
//             return true
//         }
//     })
//     return resultcheck
// }

// function getSum(arr) {
//     const check = checkString(arr)
//     if (check == true) {
//         const result = arr.reduce(function (sum, elem) {
//             return sum +' '+ elem
//         }, '')
//         return result
//     }
// }
// let sum = getSum(arr);
// console.log(sum);



// 2
const checkString = (arr) => arr.every((el) => isNaN(el))

const getSum = (arr) => {
    const check = checkString(arr)
    if (check == true) {
        const result = arr.reduce((sum, elem) => sum + ' ' + elem, '')
        return result
    }
}
console.log(getSum(arr));