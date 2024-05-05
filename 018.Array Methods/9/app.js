// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce


const n = prompt('введите количество элементов массива');
const arr = [];

for (let i = 0; i < n; i++) {
    const nArr = prompt('введите элементы массива');
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




// 4'
for (let i = 0; i < n; i++) {
    const nArr = prompt('введите элементы массива');
   !isNaN(nArr)? arr.push(+nArr):console.log('error');
}

let sum_2 = 0;
arr.forEach((elem)=> sum_2 += elem)
console.log(sum_2);


let res_2 = arr.reduce((sum, elem)=> sum + elem)
console.log(res_2);

