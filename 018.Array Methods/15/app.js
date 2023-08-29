// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread


const n = 6;
let arr1 = [];
let arr2 = [];

for (let i = 0; i < 6; i++) {
    if (i<3) {
        arr1.push(prompt())
    } else {
        arr2.push(prompt())   
    } 
}

let arr3 = [...arr1,...arr2];
console.log(arr3);