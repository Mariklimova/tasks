// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce



const n = prompt('введите количество элементов массива');
const arr = [];

// for (let i = 0; i < n; i++) {
//     let nArr = prompt('введите элементы массива');
//     if (!isNaN(nArr)) {
//         arr.push(+nArr);
//     } else {
//         console.log('error');
//     }
// }

// // 1
// let mply = 1;
// arr.forEach(function (elem) {
//     mply *= elem;
// })
// console.log(mply);

// // 2
// let res = arr.reduce(function (mply_2, elem) {
//     return mply_2 * elem;
// })
// console.log(res);


// 3
for (let i = 0; i < n; i++) {
    let nArr = prompt('введите элементы массива');
    !isNaN(nArr) ? arr.push(+nArr) : console.log('error');
}

let mply_3 = 1;
arr.forEach((elem) => mply_3 *= elem)
console.log(mply_3);


let res_3 = arr.reduce((mply_3, elem) => mply_3 * elem)
console.log(res_3);