// 13. Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его


let num1 = prompt('введите число 1');
let num2 = prompt('введите число 2');


if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > 0) {
        console.log('I\'m ' + num1 + num2);
    } else {
        console.log('error');
    }
} else {
    console.log('Вы ввели не число');
}