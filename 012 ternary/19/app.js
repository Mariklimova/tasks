// 19. Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста


const str = prompt('введите текст');

// 1
if (isNaN(str)) {
    console.log(str.split(''));
} else {
    console.log('error');
}
// 2
if (isNaN(str)) console.log(str.split(''));
else console.log('error');

// 3
isNaN(str) ? console.log(str.split('')) : console.log('error');

// 4
console.log(isNaN(str) ? str.split('') : 'error');