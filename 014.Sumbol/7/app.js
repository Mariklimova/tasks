// 7. На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

let word = 'hSСhOol'.toLowerCase();

// 1
if (isNaN(word)) {
    console.log(`${'#'}${word}`);
} else {
    console.log('error');
}

// 2
if (isNaN(word)) console.log(`${'#'}${word}`);
else console.log('error');

// 3
isNaN(word) ? console.log(`${'#'}${word}`) : console.log('error');

// 4
console.log(isNaN(word) ? `${'#'}${word}` : 'error');
