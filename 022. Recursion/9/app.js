// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [110, -2, 2, 12, 56, 100, 120];
let max = arr[0];


function getMax(arr) {
    if (arr.length === 0) return 0
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
