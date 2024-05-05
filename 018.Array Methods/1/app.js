// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter


const num = 5;
const arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(prompt('введите элемент массива'));

}

// 1
const res = arr.filter(function (elem) {
    if (!isNaN(elem)) {
        return true
    } else {
        return false
    }
})

if (res.length > 0) {
    console.log(res);
} else {
    console.log('Массив пуст');
}


// 2
const result = arr.filter((el)=>!isNaN(el))
console.log(result.length > 0? result:'Массив пуст');


// 3

console.log(arr.filter((el)=>!isNaN(el)).length > 0? result:'Массив пуст');