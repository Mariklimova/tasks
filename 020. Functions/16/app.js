// 16. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = 3;

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt())
    }
    return arr
}
let arr = doArr(n);

function isValid(arr) {
    let check = arr.every(function (el) {
        if (!isNaN(el)) {
            return true
        } else {
            return false
        }
    })
    return check
}

function genNewArr(arr) {
    let result = isValid(arr)
    if (result === true) {
        return arr.map((elem) => (elem % 2 === 0) ? elem * elem : elem)
    } else {
        return 'error'
    }
}

const res = genNewArr(arr);
console.log(res);