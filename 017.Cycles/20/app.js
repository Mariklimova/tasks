// 20.Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.


const num = '55639217'.split('');
const res = [];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0 ) {
        res.push(num[i]);
        res.push(':')
    } else {
        res.push(num[i]);
    }
}
res.pop()
res.push('.')
console.log(res.join(''));
