// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year


const word = prompt().split(' ');

function changeWord(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        if (i % 2 !== 0) {
            arr.push(word[i].toUpperCase())
        } else {
            arr.push(word[i].toLowerCase())
        }
    }
    return arr
}
const res = changeWord(word)
console.log(res);