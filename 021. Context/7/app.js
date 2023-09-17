// 5. Напишите функцию, которая принимает строку в виде пароля и проверяет,
// является ли этот пароль надежным. Надежный пароль должен содержать хотя бы
// одну заглавную букву, цифры, а его длина должна быть не менее 8 символов

let str = 'Agata111213'


function checkPassword(str) {
    if (str.length < 8) return 'пороль меньше восьми символов'
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) && str[i] !== str[i].toUpperCase()) {
            return 'пороль не надежный'
        } else {
            return 'пороль надежный'
        }
    }
}
const res = checkPassword(str);
console.log(res);