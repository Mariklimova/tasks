// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const n = 5;

function isValid(arr) {
    let res = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        } else {
            return false
        }
    })
    return res
}

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt())
    }
    return arr
}
let arr = doArr(n);

function muliplyArr(arr) {
    let bool = isValid(arr)
    if (bool === true) {
        return arr.reduce((middle, el) => middle * el, 1)
    } else {
        return 'error'
    }
}

let mult = muliplyArr(arr)
console.log(mult);


