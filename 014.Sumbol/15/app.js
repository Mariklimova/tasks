// 15. Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua


const str = 'fullstack';
const gl = 'eyuoia'
let findVowels = ''


// 1
for (let i = 0; i < str.length; i++) {
   if (gl.includes(str[i])) {
      findVowels += str[i];
   }
}
console.log(findVowels);

// 2
let res = '';
for (let i = 0; i < str.length; i++) {
   if (str[i] == 'e' || str[i] == 'y' || str[i] == 'u' || str[i] == 'o' || str[i] == 'i' || str[i] == 'a') {
      res += str[i]
   }

}
console.log(res);

// 3
let vowels = '';
for (let i = 0; i < str.length; i++) {
   (gl.includes(str[i])) ? vowels += str[i] : '';
}
console.log(vowels);
