// 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const arr = [1, 2, 3, 4, 5];

for (let i = arr[0]; i < arr.length + 1; i++) {
    console.log(i);
}

// 2
let i = arr[0];
while (i <= arr.length) {
    console.log(i);
    i++
}

// 3
for (let i of arr) {
    console.log(i);
}