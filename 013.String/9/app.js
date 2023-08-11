// 9. На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

let date = prompt('введите дату');


console.log(date.split('-').reverse().join('/'));
