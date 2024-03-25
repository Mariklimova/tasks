// 6. Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел

let num = prompt('введите число');

if (isNaN(num)) {
    console.log('некорректный ввод');
} else {
    let sq = Math.sqrt(num);

    if (Number.isInteger(sq)) {
        console.log(sq);
    } else {
        console.log(Math.round(sq));

    }
}

// 2
if (isNaN(num)) {
    console.log('некорректный ввод');
} else {
    Number.isInteger(Math.sqrt(num))? console.log(Math.sqrt(num)):console.log(Math.round(Math.sqrt(num)));
}


// 3
if (isNaN(num)) console.log('некорректный ввод');
else Number.isInteger(Math.sqrt(num))? console.log(Math.sqrt(num)):console.log(Math.round(Math.sqrt(num)));


// 4
(isNaN(num))?console.log('некорректный ввод'): console.log(Number.isInteger(Math.sqrt(num))? Math.sqrt(num):Math.round(Math.sqrt(num)));


// 5
console.log(isNaN(num)?'некорректный ввод': (Number.isInteger(Math.sqrt(num))? Math.sqrt(num):Math.round(Math.sqrt(num))));