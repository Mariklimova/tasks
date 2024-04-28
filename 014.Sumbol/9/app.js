// 9. На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

let str = '123@1@@34'

// 1
let result = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] !== '@') {
        result += str[i];
    }
}
console.log(result);

// 2
console.log(str.replaceAll('@', ''));

// 3
console.log(str.split('@').join(''));