// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of


const arr = [2, 5, 9, 15, 0, 4];

// 1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        console.log(arr[i]);
    }
}


// 2
for (const el of arr) {
    if (el % 3 === 0) {
        console.log(el);
    }
}
