// 20.Пользователь вводит строку. Необходимо посчитать количество гласных

let str = prompt('введите текст');
let sum = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'u' || str[i] == 'i' || str[i] == 'o' || str[i] == 'e' || str[i] == 'y') {
        sum += 1
    }
}
console.log(sum);


// 2
const string = prompt('введите текст');
const vovels = ['a','u','i','o','e','y']
let sum_2 = 0;
for (let i = 0; i < vovels.length; i++) {
    if (string.includes(vovels[i])) {
        sum_2 += 1
    }
}
console.log(sum);