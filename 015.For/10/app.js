// 10. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами


let str1 = 'стол'.split('');
let str2 = 'слот'.split('');


// 1
if (str1.sort().join('') === str2.sort().join('')) {
    console.log(true);
} else {
    console.log(false);
}

// 2
