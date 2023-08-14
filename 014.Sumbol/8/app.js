// 8. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false


let str = 'мем';
let pal = str.split('').reverse().join('')


// 1
if (str === pal) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if (str === pal) console.log(true);
else console.log(false);

// 3
str === pal ? console.log(true) : console.log(false);

// 4
console.log(str === pal ? true : false);


