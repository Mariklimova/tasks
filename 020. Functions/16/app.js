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


const genNewArr = (arr) => {
    const isValid = (arr) => arr.every((el) => !isNaN(el));
    if (isValid(arr) === true) return arr.map((elem) => (elem % 2 === 0) ? elem * elem : elem)
    else return 'error'
}
console.log(genNewArr(arr));