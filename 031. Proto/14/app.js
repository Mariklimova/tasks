// 14. По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?


const str = 'Why isn\'t my code working?';

function isVaporwaveStr() {
    const result = str.toUpperCase().split(' ').join('').split('').join('  ');
    return result
}
const res = isVaporwaveStr(str);
console.log(res);