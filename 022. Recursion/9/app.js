// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [2, 12, 56, 100];
// const arrMax = arr[0]


function getMax(arr) {
    if (arr.length == 0) return 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            return arr[i]
        } else {
            // return getMax(arr)
        }
    }
}
const res = getMax(arr);
console.log(res);
