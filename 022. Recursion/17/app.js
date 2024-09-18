// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10

// 1
function test(arr) {
    if (arr.length === 0) return -Infinity;
    return Math.max(arr[0], test(arr.slice(1)));
}

console.log(test([1, 2, 3, 7, 2, 8, 1]));

// 2
function test_2(arr, maxValue = -Infinity) {
    if (arr.length === 0) return maxValue;
    if (arr[0] > maxValue) maxValue = arr[0]
    return test_2(arr.slice(1), maxValue);
}

console.log(test_2([1, 2, 3, 7, 2, 8, 1]));

// 3
function test_3(arr) {
    if (arr.length === 1) return arr[0];
    const next = test_3(arr.slice(1));
    return arr[0] > next ? arr[0] : next;
}

console.log(test_3([9, 1, 2, 3, 7, 2, 8, 1]));







