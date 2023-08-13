// 20.Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l


let str = 'hsChOoL'.toLowerCase();


// 1
if (isNaN(str)) {
    console.log(str.split('').join('-'));
} else {
    console.log('error');
}

// 2
if (isNaN(str)) console.log(str.split('').join('-'));
else console.log('error');

// 3
isNaN(str) ? console.log(str.split('').join('-')) : console.log('error');

// 4
console.log(isNaN(str) ? str.split('').join('-') : 'error');

// 5
if (isNaN(str)) {
    console.log(str.replaceAll('', '-').slice(1, -1));
} else {
    console.log('error');
}

