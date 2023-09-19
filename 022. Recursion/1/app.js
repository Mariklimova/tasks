// 1. Отобразите в строке через пробел числа от 0 до 10 по убыванию используя
// рекурсию


let i = 10;

function test(i) {
    if (i === 0) return 0
    return `${i} ` + test(i - 1)
}
const res = test(i);
console.log(res);