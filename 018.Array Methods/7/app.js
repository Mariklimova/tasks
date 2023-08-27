// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

let arr = ['hschool', 'hschool_0', 'hschool_1'];

// 1
console.log(arr[0] + ', ' + arr[arr.length - 1]);

// 2
console.log(arr.shift() + ', ' + arr.pop());

// 3
let arr3 = ['hschool', 'hschool_0', 'hschool_1'];
console.log(arr3.slice(0, 1) + ', ' + arr3.slice(2));

// 4
// arr.forEach(function (el, index) {
//     if (index === 0 && index === arr.length) {
//         console.log(el);
//     }
// })


// 5
// let arr5 = ['hschool', 'hschool_0', 'hschool_1'];
// for (let i = 0; i < arr5.length; i++) {
//     if (i === 0 && i === arr5.length - 1) {
//         console.log(arr[i]);
//     }
// }