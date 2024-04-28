// 18. На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

let str = 'Swap Case';
let result = '';

// 1
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         result += str[i].toLowerCase();
//     } else if ((str[i] === str[i].toLowerCase())) {
//         result += str[i].toUpperCase()
//     }
// }
// console.log(result);


// 2
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
    } else {
        result += str[i].toUpperCase()
    }
}
console.log(result);


// 3
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) result += str[i].toLowerCase();
//     else result += str[i].toUpperCase()
// }
// console.log(result);


// 4
// for (let i = 0; i < str.length; i++) {
//     (str[i] === str[i].toUpperCase()) ? result += str[i].toLowerCase() : result += str[i].toUpperCase()
// }
// console.log(result);

