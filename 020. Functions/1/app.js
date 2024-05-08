// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const name_ = prompt('введите имя'),
    surname = prompt('введите фамилию');

function getName(name_, surname) {
    return `Привет, ${name_} ${surname}`
}
const res = getName(name_, surname)
console.log(res);