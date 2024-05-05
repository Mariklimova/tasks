// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)



// 1
const arr = [];
for (; ;) {
    arr.push(prompt('введите знаения массива 1'))
    if (arr.length === 5) break
}
console.log(arr);

// 2
const arr_2 = [];
while (true) {
    arr_2.push(prompt('введите значения массива 2'))
    if (arr_2.length === 5) break
}
console.log(arr_2);

