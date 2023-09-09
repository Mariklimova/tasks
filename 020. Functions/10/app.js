// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkNumber(arr) {
    const res = arr.every(function (elem) {
        if (!isNaN(elem)) {
            return true
        }
    })
    return res
}

function chooseEvenNumbers(arr) {
    const check = checkNumber(arr);
    if (check === true) {
        let res2 = arr.filter(function (el) {
            if (el % 2 === 0) {
                return true
            }
        })
        return res2
    }

}
let res3 = chooseEvenNumbers(arr);
console.log(res3);