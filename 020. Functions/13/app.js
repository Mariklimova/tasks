// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str1 = prompt(),
    str2 = prompt();

function isValidStr(str1, str2) {
    if (!isNaN(str1)) return false
    if (!isNaN(str2)) return false
    return true
}
function checkStr(str1, str2) {
    const res = isValidStr(str1, str2);
    if (res === true) {
        return str1.split('').sort().join() === str2.split('').sort().join() ? true : false
    } else {
        return 'error'
    }
}
let res = checkStr(str1, str2)
console.log(res);