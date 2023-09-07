// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]


const arr = ['by', 'belarus', 'de', 'ru', 'germany'];

function filterWord(arr) {
    let res = arr.filter(function (elem) {
        if (elem.length <= 2) {
            return true
        }
    })
    return res
}
let res2 = filterWord(arr)
console.log(res2);