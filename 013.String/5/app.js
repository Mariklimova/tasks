// 5. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы


let str = prompt('введите строку текста').trim();
// 1
if (isNaN(str)) {
    console.log(str[0].toUpperCase());
} else {
    console.log('ошибка ввода');
}
// 2
console.log(isNaN(str) ? str[0].toUpperCase() : 'ошибка ввода');
// 3
isNaN(str) ? console.log(str[0].toUpperCase()) : console.log('ошибка ввода');
// 4
if (isNaN(str)) console.log(str[0].toUpperCase());
else console.log('ошибка ввода');
// доп
if (isNaN(str)) {
    console.log(str[0].toUpperCase() + str.slice(1));
} else {
    console.log('ошибка ввода');
}