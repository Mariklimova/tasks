// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [110, -2, 2, 12, 3120, 56, 100, 120];
let max = arr[0];


function getMax(arr) {
    if (arr.length === 0) return 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            return getMax(arr)
        }
    }
    return max
}
const res = getMax(arr);
console.log(res);


// function getMax(arr) {
//     if (arr.length === 0) return
//     arr.forEach(elem => {
//         if (elem > max) {
//             max = elem
//         }
//     })
//     return max
// }
// const res = getMax(arr);
// console.log(res);





