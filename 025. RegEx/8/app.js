// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = 'df78vv-sd_1';

function getLetters(str) {
   try {
      let newStr = str.replaceAll(/[\d\-\_]+/gm, '');
      if (newStr.length === str.length) throw new Error('only letters')
      return true
   } catch (error) {
      return error.message
   }
}
const res = getLetters(str);
console.log(res);
