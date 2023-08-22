// 2. Выявить является ли введенное число четным


let a = +prompt('введите число');


// 1
if (a % 2 === 0) {
    console.log('четное');
} else {
    console.log('нечетное');
}

// 2
if (a % 2 === 0) console.log('четное');
else console.log('нечетное');

// 3
a % 2 === 0 ? console.log('четное') : console.log('нечетное');

// 4
console.log(a % 2 === 0 ? 'четное' : 'нечетное');