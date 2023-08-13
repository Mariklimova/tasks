// 9. На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

let str = '123@1@@34'

console.log(str.replaceAll('@', ''));

let result = '';

for (let i = 0; i < str.length; 1++) {
    if (str[i] != '@') {
        result += srt[i]
    }

}
console.log(result);
console.log(str.replaceAll('@', ''));