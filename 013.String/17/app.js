// 17. На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true


let str = prompt('введите текст').toLowerCase();

// 1
if (str.includes('хорош')) {
    console.log(true);
} else {
    console.log(false);
}


// 2
if (str.includes('хорош')) console.log(true);
else console.log(false);


// 3
str.includes('хорош') ? console.log(true) : console.log(false);


// 4
console.log(str.includes('хорош') ? true : false);