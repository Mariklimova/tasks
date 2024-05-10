// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 78, 45, 23, 45, 92];

// 1
// function filterArr(arr) {
//     let res = arr.every(function (elem) {
//         if (!isNaN(elem)) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return (res)
// }
// let res2 = filterArr(arr)
// console.log(res2);


// 2
const filterArr = (arr) => arr.every((elem) => !isNaN(elem));
console.log(filterArr(arr));
