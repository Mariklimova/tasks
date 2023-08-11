// 13. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

let date = prompt('введите дату');


console.log(date.split('-').reverse().join('.'));
