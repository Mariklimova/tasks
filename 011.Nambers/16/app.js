// 16. Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).


let a = +prompt('введите число');
let sq = Math.sqrt(a);


// 1
if ((sq % 1) == 0) {
    console.log(sq.toFixed(0));
} else {
    console.log(sq.toFixed(2));
}

// 2
(sq % 1) == 0 ? console.log(sq.toFixed(0)) : console.log(sq.toFixed(2));