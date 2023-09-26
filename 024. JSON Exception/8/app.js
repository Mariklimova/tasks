// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arr = ["O","Q","R","S"];

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
        isValid(arr);
        let alphabet = 'abcdefgijklmnopqrstuvwxyz';
        const str = arr.join("");
        if (str == str.toUpperCase()) {
            alphabet = alphabet.toUpperCase()
        }
        const start = alphabet.indexOf(str[0]);
        const newAlphabet = alphabet.slice(start, start + str.length)
        for (let i = 0; i < newAlphabet.length; i++) {
            if (newAlphabet[i] !== str[i]) return newAlphabet[i]
        }
    } catch (error) {
        return error.message
    }
}
const res = getNextLetter(arr);
console.log(res);


