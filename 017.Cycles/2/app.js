// 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

for (let i = 1; i < 6; i++) {
    console.log(i);
}

// 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++
}

// 3
for (let i of [1, 2, 3, 4, 5]) {
    console.log(i);
}