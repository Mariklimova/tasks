// 5. Найдите максимальное значение в статичном массиве используя цикл. 


const arr = [1, 3, 5, 6, 8, 10, 2];
let res = 0;


// 1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
        res = arr[i]
    }
}
console.log(res);


// 2
for (const el of arr) {
    el > res ? res = arr[i] : null;
}
console.log(res);


// 3
console.log(Math.max(...arr));


