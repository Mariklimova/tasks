// 18. Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить то целых)

let a = +prompt('введите число');
let sq = Math.sqrt(a);



if (Number.isInteger(sq) == true) {
    console.log(sq.toFixed(0));
} else {
    console.log(sq.toFixed(2));
}
