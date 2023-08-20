// 14. Вы вводите значение с клавиатуры. Если значение четное, то вывести true, в
// противном случае false


let a = +prompt('введите значение');

// 1
if ((a % 2) == 0) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if ((a % 2) == 0) console.log(true);
else console.log(false);

// 3
(a % 2) == 0 ? console.log(true) : console.log(false);

// 4
console.log((a % 2) == 0 ? true : false);
