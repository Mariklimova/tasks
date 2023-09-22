// 2. На входе массив. Реализуйте две функции. Первая проверяет, что все элементы
// массива положительные числа. Вторая функция возвращает массив, в котором
// каждое положительное число умножено на 2. Если результат проверки - true,
// вызывайте вторую функцию и возвращайте полученный массив.

const arr = [232, 45, 6, 77, 6];

function checkPositiv(arr) {
    let check = arr.every(function (el) {
        if (el > 0) {
            return true
        } else {
            return false
        }
    })
    return check
}

function getMultiplay(arr) {
    let check = checkPositiv(arr);
    if (check) {
        let nArr = [];
        for (let i = 0; i < arr.length; i++) {
            nArr.push(arr[i] * 2)
        }
        return nArr
    } else {
        return 'error'
    }
}
let res = getMultiplay(arr);
console.log(res);