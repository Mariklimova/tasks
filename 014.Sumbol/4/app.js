// 4. На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

let str1 = 'string';
let str2 = 'StRiNg';

// 1
if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if (str1.toLowerCase() === str2.toLowerCase()) console.log(true);
else console.log(false);

// 3
str1.toLowerCase() === str2.toLowerCase() ? console.log(true) : console.log(false);

// 4
console.log(str1.toLowerCase() === str2.toLowerCase() ? true : false);