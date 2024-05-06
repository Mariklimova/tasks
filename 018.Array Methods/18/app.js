// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map


const n = 5;
const arr = [];

for (let i = 0; i < n; i++) {
    let num = prompt('');
    if (!isNaN(num)) arr.push(+num)
}

// 1
const res = arr.map((el)=>el**2 )
console.log(res);

// 2
// let arr2 = [];
// arr.forEach(function(el){
//     arr.push(el**2);
// })
// console.log(arr2);


// 3
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr3.push(arr[i] ** 2);
// }
// console.log(arr3);

// // 4
// let arr4 = [];
// let i = 0;
// while (i < arr.length) {
//     arr4.push(arr[i] ** 2)
//     i++
// }
// console.log(arr4);

// // 5
// let arr5 = [];
// for (let elem of arr) {
//     arr5.push(elem ** 2)
// }
// console.log(arr5);