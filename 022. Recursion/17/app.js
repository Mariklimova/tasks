// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10


let max = arr[0];

const findMax = (arr) => {
    if (arr.length === 0) return;
    if (arr[0] > max) {
        max = arr[0]
        findMax(arr.slice(1))
    }
}
findMax(arr);
console.log([10, 5, 8]);







