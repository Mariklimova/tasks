// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

let n = 4;
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt())

}
let arr1 = [];
let arr2 = [];

arr.forEach(function (elem) {
    if (isNaN(elem)) {
        arr1.push(elem);
    } else {
        arr2.push(elem);
    }
})
console.log(arr1);
console.log(arr2);