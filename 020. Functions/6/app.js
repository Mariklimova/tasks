// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива


const n = prompt();

function makeArr(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(prompt())

    }
    return arr

}
let array = makeArr(n)

function findCount(array) {
    return array.length
}
let res = findCount(array)
console.log(res);