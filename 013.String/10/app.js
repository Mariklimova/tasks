// 10. На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений


let str = prompt('введите текст').toLowerCase().replaceAll(' ','');

// 1
if (isNaN(str)) {
    console.log(str.repeat(3));
} else {
    console.log('error');
}

// 2
isNaN(str) ? console.log(str.repeat(3)) : console.log('error');