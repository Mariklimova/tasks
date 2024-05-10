// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [2, 45, 3, 78, 55];

// 1
// function checkArr(arr) {
//     let res = arr.every(function (elem) {
//         if (typeof elem === 'number') {
//             return true
//         } else {
//             return false
//         }
//     })
//     return res

// }
// function searchArr(arr) {
//     let check = checkArr(arr)
//     if (check === true) {
//         let res = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (res < arr[i]) {
//                 res = arr[i]
//             }
//         }
//         return res
//     } else {
//         return 'error'
//     }

// }
// let res = searchArr(arr);
// console.log(res);


// 2
function searchArr(arr) {
    const checkArr = (arr) => arr.every((elem) => typeof elem === 'number');

    if (checkArr(arr) === true) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            if (res < arr[i]) res = arr[i];
        }
        return res
    } else {
        return 'error'
    }
}
const res = searchArr(arr);
console.log(res);