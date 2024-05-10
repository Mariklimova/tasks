// 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const n = 4;

// 1
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }
//     return result
// }
// const fact = factorial(n);
// console.log(fact);



// 2
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
const fact = factorial(n);
console.log(fact);



