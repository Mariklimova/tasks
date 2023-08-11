// 3. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы


// 1
let str = prompt().toLowerCase().trim();

if (!isNaN(str)) {
    console.log('ошибка ввода');
} else {
    console.log(str.length);
}


// 2
if (!isNaN(str)) console.log('ошибка ввода');
else console.log(str.length);

// 3
!isNaN(str) ? console.log('ошибка ввода') : console.log(str.length);

// 4
console.log(!isNaN(str) ? 'ошибка ввода' : str.length);
