// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

let x = prompt();

if (isNaN(x)) {
    console.log(false);
} else {
    console.log(true);
}
 isNaN(x) ? console.log(false):  console.log(true);