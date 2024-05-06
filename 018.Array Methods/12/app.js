// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]


const n = prompt('введите количество элементов массива');
const arr = [];


// 1
for (let i = 0; i < n; i++) {
    let nArr = prompt('введите элементы массива');
    if (isNaN(nArr)) {
        arr.push(nArr);
    } else {
        console.log('error');
    }
}


let res = arr.filter(function (elem) {
    if (elem[0] === 'a' || elem[0] === 'h') {
        return true;
    } else {
        return false;
    }
});
console.log(res);


// 2
for (let i = 0; i < n; i++) {
    let nArr = prompt('введите элементы массива');
    isNaN(nArr) ? arr.push(nArr) : console.log('error');
}


const res_2 = arr.filter((elem) => elem[0] === 'a' || elem[0] === 'h');
console.log(res_2);