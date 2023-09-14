// 7. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt('введите число с которым будем сравнивать');

const len = +prompt('введите количество элементов массива')

function doArr(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(prompt())

    }
    return arr
}
let arr = doArr(len)

function filterArr(arr, n) {
    let res = arr.filter(function (el) {
        if (el > n) {
            return true
        }
    })
    return res
}
let res2 = filterArr(arr, n)
console.log(res2);