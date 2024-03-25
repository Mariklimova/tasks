// 11. Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

const cm = prompt('введите число в сантиметрах');

// 1
if (!isNaN(cm)) {
    if (cm > 0) {
        console.log(Math.round(cm / 100));
    } else {
        console.log('error');
    }
} else {
    console.log('Вы ввели не число');
};


// 2
if (!isNaN(cm)) {
    (cm > 0) ? console.log(Math.round(cm / 100)) : console.log('error');
} else {
    console.log('Вы ввели не число');
};


// 3
if (!isNaN(cm)) {
    console.log(cm > 0 ? Math.round(cm / 100) : 'error');
} else {
    console.log('Вы ввели не число');
};


