// 13. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива


const arr = [2, 3, 4, 5];
let res = arr[0];

// 1
for (i = 1; i < arr.length; i++) {
    res *= arr[i];
   
}
console.log(res);


// 2
let res2 = 1;
for (const el of arr) {
    res2 *= el;
}
console.log(res2);