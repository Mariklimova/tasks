// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach


const num = 5;
const a = prompt('введите 6');
const b = prompt('введите 7');
const arr = [];


for (let i = 0; i < num; i++) {
    arr.push(prompt('введите значение массива'))
}


// 1
const res = arr.filter(function (elem) {
    if (!isNaN(elem) && elem != a && elem != b) {
        return true
    } else {
        return false
    }
})

if (res.length === 0) {
    console.log('Массив пуст');
} else {
    console.log(res);
}


// 2
const result = arr.filter((elem) => !isNaN(elem) && elem != a && elem != b)
console.log(result.length === 0 ? 'Массив пуст' : result);


// 3
const newArr = [];
arr.forEach(elem => {
    if (!isNaN(elem) && elem != a && elem != b) {
        newArr.push(elem)
    } else if (arr.length === 0) {
        console.log('Массив пуст');
    }

});
console.log(newArr.length === 0 ? 'Массив пуст' : newArr);


// 4
console.log(arr.filter((elem) => !isNaN(elem) && elem != a && elem != b).length === 0 ? 'Массив пуст' : result);