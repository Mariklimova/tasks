// 10. Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел


const x = prompt('введите число');

// 1
if (!isNaN(x)) {
    if (x != 0) {
        console.log(1 / x);
    } else {
        console.log('Обратного числа не существует');
    }
} else {
    console.log('ВЫ ввели не число');
}


// 2
if (!isNaN(x)) {
    (x != 0) ? console.log(1 / x) : console.log('Обратного числа не существует');
} else {
    console.log('ВЫ ввели не число');
}

// 3
if (!isNaN(x)) {
    console.log(x != 0 ? (1 / x) : 'Обратного числа не существует');
} else {
    console.log('ВЫ ввели не число');
}
