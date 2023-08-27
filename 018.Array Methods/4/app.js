// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)


let arr = [];

// 1
for (; ;) {
    arr.push(prompt())
    if (arr.length === 5) {
        break
    }
}
console.log(arr);

// 2
let arr2 = [];
while (true) {
    arr2.push(prompt())
    if (arr2.length === 5) {
        break
    }
}
console.log(arr2);

