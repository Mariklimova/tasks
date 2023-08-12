// 20.Пользователь вводит строку. Необходимо посчитать количество гласных

let str = prompt();
let sum = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'u' || str[i] == 'i' || str[i] == 'o' || str[i] == 'e') {
        sum += 1
    }
}
console.log(sum);