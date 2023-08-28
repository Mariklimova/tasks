// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce



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
let mply = 1;
arr.forEach(function (elem) {
    mply *= elem;
})
console.log(mply);

// 2
let res = arr.reduce(function (mply, elem) {
    return mply * elem;
})
console.log(res);