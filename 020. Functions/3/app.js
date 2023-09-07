// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company


const str = prompt().split(' ');

function changeStr(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i][0].toUpperCase()+str.slice(1))
       
        
    }
    return arr
}
let res = changeStr(str)
console.log(res.join(' '));