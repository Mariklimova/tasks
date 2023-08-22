

// Найти максимальное число из 2 введенных (2 способа)


let a = +prompt('введите первое число');
let b = +prompt('введите второе число');


// 1
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// 2
if (a > b) console.log(a);
else console.log(b);

// 3
(a > b) ? console.log(a) : console.log(b);

// 4
console.log(a > b ? a : b);

// 5
console.log(Math.max(a, b));
