// 11. На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел

const obj = {};

let num1 = +prompt('введите первое число');
let num2 = +prompt('введите второе число');


obj.avg = (num1 + num2) / 2;
console.log(obj);


