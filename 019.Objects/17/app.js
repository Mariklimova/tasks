// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6];

const obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
}

const nArr = [];
for (const key in obj) {
    nArr.push(obj[key])
}

const max = Math.max(...nArr);

for (const key in obj) {
    if (obj[key] === max) {
        console.log(key);
        
    }
}


