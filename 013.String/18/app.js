// . Дан массив. Вывести каждый отдельный элемент в консоль (for)

let arr = [1, 2, 3, 4, 5, 6, 7];

// 1
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// 2
for (const el of arr) {
    console.log(el);
}
