// 9. На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

let str = '123@1@@34'

console.log(str.replaceAll('@', ''));

let resalt = '';

for (let i = 0; i < str.length; 1++) {
    if (str[i] != '@') {
        resalt += srt[i]
    }

}
console.log(resalt);
console.log(str.replaceAll('@', ''));