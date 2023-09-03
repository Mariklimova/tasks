// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6];

const obj = {};

arr.forEach(function (elem, index) {
    obj[index] = elem
});
// console.log(obj);

let res = 0;
for (const key in obj) {
    if (Math.max(key === key)) {
        // res++
        console.log(obj[key]);
    } 
}
console.log(obj);