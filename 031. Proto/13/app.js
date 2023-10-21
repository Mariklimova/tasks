// 13. Напишите алгоритм для нахождения факториала числа

const num = 10;

function factorial(num) {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
const res = factorial(num)
console.log(res);
