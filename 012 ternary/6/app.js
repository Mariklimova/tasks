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