// 13. На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

const str = '135'
let result = 0
for (let i = 0; i < 3; i++) {
    result += +str[i];
}
console.log(result);


// 2
// for (const el of str) {
//     result += +el
// }
// console.log(result);






