// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company


// 1
// const str = prompt().split(' ');

// function changeStr(str) {
//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i][0].toUpperCase()+str[i].slice(1))


//     }
//     return arr
// }
// const res = changeStr(str)
// console.log(res.join(' '));



// 2
const str = 'hschool company'.split(' ')

const changeStr = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i][0].toUpperCase() + str[i].slice(1))
    }
    return arr.join(' ')
}
console.log(changeStr(str));


