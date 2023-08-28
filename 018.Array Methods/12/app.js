// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]


let n = prompt('введите количество элементов массива');
let arr = [];

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