// 12. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы


let str = prompt('введите текст').trim();


// 1
if (isNaN(str)) {
    if (str === 'hschool') {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('некорректный ввод');
};


// 2
if (isNaN(str)) {
    (str === 'hschool') ? console.log(true) : console.log(false);
} else {
    console.log('некорректный ввод');
};


// 3
if (isNaN(str)) {
    console.log(str === 'hschool' ? true : false);
} else {
    console.log('некорректный ввод');
};
