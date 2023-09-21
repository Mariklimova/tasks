// 5. Напишите функцию countNumbers(arr), которая считает количество чисел в
// массиве arr. Используйте рекурсию.

const arr = [5, 78, 9, 10, 3]
let count = 0

function countNumbers(arr) {
    if (arr.length === 0) return;
    count++
    countNumbers(arr.slice(1))
}
countNumbers(arr)
console.log(count);
