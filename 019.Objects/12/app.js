// 12. На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел




let n = 4;
let arr = []
const obj = {};

for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}

let res = arr.reduce(function (sum, elem) {
    return sum + elem
}, 0)


obj.sum = res;
console.log(obj);