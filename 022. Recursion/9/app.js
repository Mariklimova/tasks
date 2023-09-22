// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [110, -2, 2, 12, 3120, 56, 100, 120];
let max = arr[0];


function getMax(arr) {
    if (arr.length === 0) return
    if (arr[0] > max) {
        max = arr[0]
    }
    getMax(arr.slice(1))
}
getMax(arr);
console.log(max);







