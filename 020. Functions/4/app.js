// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]


const arr = ['by', 'belarus', 'de', 'ru', 'germany'];

// 1
// function filterWord(arr) {
//     const res = arr.filter(function (elem) {
//         if (elem.length <= 2) {
//             return true
//         }
//     })
//     return res
// }
// const res2 = filterWord(arr)
// console.log(res2);



// 2
const filterWord = (arr) => {
    return arr.filter((elem) => elem.length <= 2)
}
console.log(filterWord(arr));