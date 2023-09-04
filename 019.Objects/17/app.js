// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6];

const obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] += 1;
    } else {
        obj[arr[i]] = 1;
    }
}
console.log(obj);



const nArr = [];
for (const key in obj) {
    nArr.push(obj[key])
}
console.log(nArr);
const max = Math.max(...nArr);
console.log(max);


