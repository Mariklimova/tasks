// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами


const arr = [45, 10, 23, 12];

function checkNumber(arr) {
    let res = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        }
    })
    return res
}

function doubleNamber(arr) {
    const check = checkNumber(arr)

    if (check === true) {
        let res2 = arr.map(function (el) {
            return el * 2
        })
        return res2
    }
}
let doble = doubleNamber(arr);
console.log(doble);
