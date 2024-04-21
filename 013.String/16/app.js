// 16. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false


let str = prompt('введите имя и фамилию').split(' ');


if (str[0][0] === str[0][0].toUpperCase() && str[1][0] === str[1][0].toUpperCase()) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if (str[0][0] === str[0][0].toUpperCase() && str[1][0] === str[1][0].toUpperCase()) console.log(true);
else console.log(false);


// 3
console.log(str[0][0] === str[0][0].toUpperCase() && str[1][0] === str[1][0].toUpperCase() ? true : false);