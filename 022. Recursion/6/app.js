// 6. На входе массив array. Посчитайте количество элементов массива используя
// рекурсию

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findLength(arr) {
    if (arr.length == 0) return 0
    return 1 + findLength(arr.slice(1))
}
const res = findLength(arr)
console.log(res);