// 15. Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40 –
// молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод


let a = +prompt('введите значение возраста');


if (a >= 0 && a <= 18) {
    alert('детство');
} else if (a >= 19 && a <= 40) {
    alert('молодость');
} else if (a >= 41 && a <= 100) {
    alert('зрелость');
} else {
    alert('некорректный ввод')
}