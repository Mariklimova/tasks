// 3. На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false

let str1 = prompt();
let str2 = prompt();

if (str1.endsWith(str2)) {
    console.log(true);
} else {
    console.log(false);
}


console.log(str1.endsWith(str2) ? true : false);

str1.endsWith(str2) ? console.log(true) : console.log(false);


if (str1.endsWith(str2)) console.log(true);
else console.log(false);


















