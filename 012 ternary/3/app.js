// 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

const a = +prompt('введите число от 1 до 7, соответствующее дню недели');

// 1
if (a === 1) {
    console.log('Понедельник');
} else if (a === 2) {
    console.log('Вторник');
} else if (a === 3) {
    console.log('Среда');
} else if (a === 4) {
    console.log('Четверг');
} else if (a === 5) {
    console.log('Пятница');
} else if (a === 6) {
    console.log('Суббота');
} else if (a === 7) {
    console.log('Воскресенье');
} else {
    console.log('Некоректный ввод');
}


// 2
switch (a) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;

    default:
        console.log('Некоректный ввод');
        break;
}

