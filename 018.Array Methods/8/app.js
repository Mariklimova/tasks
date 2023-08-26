// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach



let n = prompt();
let arr = [];


for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

let res = arr.every(function (el) {
    if (!isNaN(el)) {
        return true
    }else{
        return false
    }
})
console.log(res);

