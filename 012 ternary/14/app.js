// 14. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

let str = prompt('введите текст');


// 1
if (isNaN(str)) {
    console.log(str.length);
} else {
    console.log('error');
}


// 2
if (isNaN(str)) console.log(str.length);
else console.log('error');

// 3
isNaN(str) ? console.log(str.length) : console.log('error');

// 4
console.log(isNaN(str) ? str.length : 'error');