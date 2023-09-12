// 1. Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает
// значение в обратном порядке ‘54321’. IIFE

const str = '12345';

function isValid(str) {
    if (!isNaN(str)) {
        return true
    } else {
        return false
    }
}

let result = (function(str){
    const check = isValid(str)
    if (check === true) {
        return str.split('').reverse().join('')
    } else {
        return 'error'
    }
}(str))
console.log(result);