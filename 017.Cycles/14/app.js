// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = [10, 20, 30, 50, 235, 3000];
let res = [];


for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i]);
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
        res.push(Number(arr[i]))
    }
}
console.log(res);










// let res = '';

// for (let i = 0; i < arr.length; i++) {
//     if ((arr[i][0]) === '1' || String(arr[i][0]) === '2' || String(arr[i][0]) === '5') {
//         // console.log(arr[i][0]);
//         // res.push(arr[i]);
//         res+=arr[i]+' '
//     }
// }
// console.log(res);


// 2
// let res = '';
// for (let i = 0; i < arr.length; i++) {
//     if (String(arr[i]).charAt(0) === '1' || String(arr[i]).charAt(0) === '2' || String(arr[i]).charAt(0) === '5') {
//                 res+=arr[i]+' '
//     }
// }
// console.log(res);


// 3
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]=String(arr[i]);
//     if (arr[i][0] == 1 ||arr[i][0] == 2 || arr[i][0] == 5)  {
//                 res.push(Number(arr[i]))
//     }
// }
// console.log(res);