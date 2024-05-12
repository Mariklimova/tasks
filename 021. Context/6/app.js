// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное значения в этом массиве. Добавьте проверки на ввод и выведите
// сообщение об ошибке, если значения массива не соответствуют условиям задачи.

const arr = [56, 44, 8, 12, 7];

// 1
// function isValid(arr) {
//     let res = arr.every(function (elem) {
//         if (!isNaN(elem)) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return res
// }

// function findMin(arr) {
//     let check = isValid(arr);
//     if (check === true) {
//         let min = arr[0];
//         let max = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             } else if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return 'Максимальное значение: ' + max + '; минимальное значение: ' + min + ';'

//     } else {
//         return 'error'
//     }
// }
// let res = findMin(arr);
// console.log(res);


// 2

function findMin(arr) {
    const isValid = (arr) => arr.every((elem) => !isNaN(elem))
    if (isValid(arr) === true) {
        let min = arr[0];
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            } else if (arr[i] > max) {
                max = arr[i];
            }
        }
        return 'Максимальное значение: ' + max + '; минимальное значение: ' + min + ';'
    } else {
        return 'error'
    }
}
const res = findMin(arr);
console.log(res);