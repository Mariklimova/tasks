// 6. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false


const str = prompt();

// 1
if (isNaN(str)) {
    if (str.includes('.com') || str.includes('.ru')) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('error');
}


// 2
if (isNaN(str)) console.log(str.includes('.com') || str.includes('.ru') ? true : false) 
else console.log('error');
