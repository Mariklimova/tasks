// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread


const n = 6;
const arr_1 = [];
const arr_2 = [];

for (let i = 0; i < n; i++) {
    if (i < 3) {
        arr_1.push(prompt())
    } else {
        arr_2.push(prompt())
    }
}

const arr_3 = [...arr_1, ...arr_2];
console.log(arr_3);



// 2
for (let i = 0; i < n; i++) {
    i < 3? arr_1.push(prompt()):arr_2.push(prompt())
}
const arr_23 = [...arr_1, ...arr_2];
console.log(arr_23);