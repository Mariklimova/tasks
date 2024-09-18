// 12. *На входе вложенный список, например [1, [2, [3]], 4]. Вычислите сумму всех чисел в этом списке, 
// используя рекурсию.
// Входные: [1, [2, [3]], 4] → Результат: 10
// Входные: [5, [6, [7, [8]]]] → Результат: 26


const sumNumbers = (list) => {
    let sum = 0;
    for (const el of list) {
        !Array.isArray(el) ? sum += el : sum += sumNumbers(el);
    }
    return sum;
}

console.log(sumNumbers([1, [2, [3]], 4]));








