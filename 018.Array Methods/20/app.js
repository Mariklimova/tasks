// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = +prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    const a = prompt();
    if (!isNaN(a)) arr.push(a);
}

// 1
// let res = arr.filter(function (elem) {
//     if (elem > 0) {
//         return elem;
//     }
// })
// console.log(res);

// // 2
// let res2 = [];
// arr.forEach(function (elem) {
//     if (elem > 0) {
//         res2.push(elem);
//     }
// })
// console.log(res2);

// // 3
// let i = 0;
// let arr2 = [];
// while (i < arr.length) {
//     if (arr[i] > 0) {
//         arr2.push(arr[i]);
//     }
//     i++
// }
// console.log(arr2);

// 4
let arr4 = [];
for (let i of arr) {
    if (i > 0) {
        arr4.push(i);
    }
}
console.log(arr4);

