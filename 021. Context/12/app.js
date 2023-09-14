// 8. Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const str = 'fjn ghjkll jikoo';
const letter = 'j';

function isValid(str, letter) {
    if (typeof (str) === 'string' && typeof (letter) === 'string') return true
    else return false
}

function counterLetter(str, letter) {
    let check = isValid(str, letter)
    let count = 0;
    if (check === true) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                count++
            }
        }
        return count
    } else {
        return 'error'
    }
}
let res = counterLetter(str, letter);
console.log(res);
