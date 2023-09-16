// 8. Напишите IIFE, которая принимает массив и возвращает новый массив,
// содержащий только уникальные элементы.
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] –> [1, 2, 3, 4, 5].

const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];

let result = (function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}(arr))
console.log(result);