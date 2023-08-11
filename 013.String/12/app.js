// 12. Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!' 

let date = prompt('введите дату');

// 1
console.log(date.split('-').join('!'));

// 2
console.log(date.replaceAll('-', '!'));
