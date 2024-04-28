// 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива


const arr = [1, 2, 3, 4, 5, 6];
let res = 1;


// 1
for (i = 0; i < arr.length; i++) {
    res *= arr[i]
}
console.log(res);


// 2
let res2 = 1
for (const el of arr) {
    res2 *= el
}
console.log(res2);