// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce


let n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    let nArr = prompt('введите элементы массива');
    if (!isNaN(nArr)) {
        arr.push(+nArr);
    } else {
        console.log('error');
    }
}

// 1
let sum = 0;
arr.forEach(function (elem) {
    sum += elem;
})
console.log(sum);

// 2
let res = arr.reduce(function (sum, elem) {
    return sum + elem;
})
console.log(res);