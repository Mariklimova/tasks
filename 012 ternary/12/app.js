// 12. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы


let str = prompt('введите текст').trim();

if (isNaN(str)) {
    if (str === 'hschool') {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('некорректный ввод');
}
