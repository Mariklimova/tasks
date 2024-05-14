// 4. На входе массив чисел. Реализуйте функцию, которая находит наибольшую
// последовательность непрерывных чисел в массиве и возвращает ее. Например,
// для массива [1, 2, 3, 4, 5, 6, 2, 3, 4] функция должна вернуть [1, 2, 3, 4, 5, 6].

const arr = [1, 2, 3, 4, 5, 6, 2, 3, 4];
const nArr = [];

// 1
function findSequence(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!nArr.includes(arr[i])) {
            nArr.push(arr[i])
        }
    }
    return nArr
}
const find = findSequence(arr)
console.log(find);








