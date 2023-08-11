// 1. Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

let str = prompt('введите любую строку текста');


// 1
if (isNaN(str)) {
    console.log(str.split(''));
} else {
    if (str % 2 === 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
}



// 2
if (isNaN(str)) {
    console.log(str.split(''));
} else {
    str % 2 === 0 ? console.log('четное') : console.log('нечетное');
}



// 3
if (isNaN(str)) {
    console.log(str.split(''));
} else {
    console.log(str % 2 === 0 ? 'четное' : 'нечетное');
}

