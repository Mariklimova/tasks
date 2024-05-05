// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach



const n = prompt('введите количество элементов массива');
const arr = [];


for (let i = 0; i < n; i++) {
    arr.push(prompt('введите элементы массива'));
}

// 1
const res = arr.every(function (el) {
    if (!isNaN(el)) {
        return true
    } else {
        return false
    }
})
console.log(res);

// 2
const res_2 = arr.every((el) => !isNaN(el) ? true : false)
console.log(res_2);


// 3
const res_3 = []
arr.forEach((el) => {
    if (isNaN(el)) res_3.push(el)

})
console.log(res_3.length === 0 ? true : false);