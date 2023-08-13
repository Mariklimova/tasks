// 2. На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str1 = 'Hello word';
let str2 = 'word'

// 1
if (str1.includes(str2)) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if (str1.includes(str2)) console.log(true);
else console.log(false);

// 3
str1.includes(str2) ? console.log(true) : console.log(false);

// 4
console.log(str1.includes(str2) ? true : false);
