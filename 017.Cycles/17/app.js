// 17. Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

let str = prompt('Введите предложение');
let num = +prompt('Введите число повторений');

console.log(str.repeat(num));