// 1. Реализуйте функцию searchBinary, которая принимает два аргумента: число и
// массив чисел от 1 до 15 включительно. Функция должна вернуть индекс, если
// указанное число найдено в массиве, и выдать сообщение об ошибке, если число
// не обнаружено в массиве.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const num = 15;


function searchBinary(arr, num) {
    let left = 0;
    let right = arr.length
    let result;
    for (let i = left; i < right; i++) {
        let middle = Math.round((left + right) / 2)

        if (arr[middle] === num) {
            result = middle
            break
        } else if (arr[middle] > num) {
            right = middle
        } else {
            left = middle
        }

    }
    if (result) {
        console.log('Вы угадали ' + result);
    } else {
        console.log('такого числа нет');
    }


}
searchBinary(arr, num)