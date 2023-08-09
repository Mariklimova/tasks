// 4. Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

let x = prompt('введите значение');


// 1
if (isNaN(x)) {
    console.log(false);
} else {
    console.log(true);
}


// 2
isNaN(x) ? console.log(false) : console.log(true);