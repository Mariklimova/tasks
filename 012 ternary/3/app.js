let a = +prompt();

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
    console.log('Воскресение');
} else {
    console.log('Некоректный ввод');
}
switch (a) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');


    default:
        break;
}

