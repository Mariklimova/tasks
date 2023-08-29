// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = +prompt();
let arr = [];

for( let i = 0; i<n;i++){
    arr.push(prompt())
}

let res = arr.filter(function (elem) {
    if (elem>0){
        return elem;
    }
})
console.log(res);

// 2
let res2 = [];
arr.forEach(function(el){
    if(elem>0){
        res += elem;
    }
})
console.log(res);

// 3
let i = 0;
let arr2 = [];
while (i<arr.length) {
    if(arr[i]>0){
        arr2.
    }
}

