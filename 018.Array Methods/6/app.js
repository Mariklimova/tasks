// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

const n = +prompt('введите число значений в массиве');
const arr = [];

// 1
for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение 1'));
}
const res = arr.some(function (el) {
    if (!isNaN(el)) {
        return true
    } else {
        return false
    }
})
console.log(res);


// 2
for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение 2'));
}
const res_2 = arr.some((el) => !isNaN(el));
console.log(res_2);
