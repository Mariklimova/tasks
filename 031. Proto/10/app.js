// 10. Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда.

const str = `const a = 5; 
const b = 10;
/*fuhjhygt7tygyggcz*/
console.log(a+b)`;
function deleteComment(str) {
    const res = str.replaceAll(/^\/\*[\w]+\*\/$/gm, '');
    return res
}
const res = deleteComment(str);
console.log(deleteComment(str));