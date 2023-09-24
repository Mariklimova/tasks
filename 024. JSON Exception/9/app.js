// 9. Вычислить сумму последовательности целых чисел до первого встреченного
// нуля. Гарантируется наличие хотя бы одного нуля в последовательности.
// Дополнительное условие - убедиться, что все элементы последовательности
// являются числами.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];
function isValid(arr) {
    const check = arr.every(function (el) {
        if (isNaN(el)) return false
        else return true
    })
    if (!check) throw new Error('not number')
    return check
}
function getSum(arr) {
    try {
        isValid(arr);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                sum += arr[i]
            } else {
                break
            }
        }
        return sum
    } catch (error) {
        return error.message
    }
}
let res = getSum(arr);
console.log(res);