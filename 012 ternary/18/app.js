// 18. Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

const str = prompt('введите текст').trim();


// 1
if (isNaN(str)) {
    if (str === 'hschool') {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    if (str % 2 === 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
};


// 2
if (isNaN(str)) {
    (str === 'hschool') ? console.log(true) : console.log(false);
} else {
    (str % 2 === 0) ? console.log('четное') : console.log('нечетное');
};


// 3
if (isNaN(str)) {
    console.log(str === 'hschool' ? true : false);
} else {
    console.log(str % 2 === 0 ? 'четное' : 'нечетное');
};