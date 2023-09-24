// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arr = ["a","b","c","d","f"];

function isValid(arr) {
    const check = arr.every(function (el) {
        if (!isNaN(el)) return false
        else return true
    })
    if (!check) throw new Error('not number')
    return check
}
function getNextLetter(arr) {
    try {
      for (let i = 0; i < arr.length; i++) {
           return 
        }   
    } catch (error) {
        return error.message
    }
}
const res = getNextLetter(arr);
console.log(res);


