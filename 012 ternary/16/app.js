// 16. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре


const str = prompt('введите текст');

// 1
if (isNaN(str)) {
    console.log(str.toUpperCase());
} else {
    console.log('error');
}

// 2
if (isNaN(str)) console.log(str.toUpperCase());
else console.log('error');

// 3
isNaN(str) ? console.log(str.toUpperCase()) : console.log('error');

// 4
console.log(isNaN(str) ? str.toUpperCase() : 'error');