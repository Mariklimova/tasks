// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива


const arr = [2, 5, 8, 1];

// 1
// function checkNumber(arr) {
//     let res = arr.every(function (elem) {
//         if (!isNaN(elem)) {
//             return true
//         }

//     })
//     return res
// }


// function getSum(arr) {
//     const check = checkNumber(arr)
//     if (check == true) {
//         let res = arr.reduce(function (sum, el) {
//             return sum + el
//         }, 0)
//         return res
//     } else {
//         return 'error';
//     }

// }
// let res2 = getSum(arr);
// console.log(res2);



// 2
const checkNumber = (arr) => arr.every((elem) => !isNaN(elem));

const getSum = (arr) => {
    const check = checkNumber(arr)
    if (check == true) return arr.reduce((sum, el) => sum + el, 0)
    else return 'error';
}
console.log(getSum(arr));




