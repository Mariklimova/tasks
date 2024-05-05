// 3. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5


const n = +prompt('введите количество элементов массива');

const arr = [];

// 1
// for (let i = 0; i < n; i++) {
//     const inputNum = prompt('element');
//     if (!isNaN(inputNum)) {
//         arr.push(inputNum);
//     }
// }

// let nArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!nArr.includes(arr[i])) {
//         nArr.push(arr[i])
//     }
// }
// console.log(nArr);


// 2
for (let i = 0; i < n; i++) {
    const inputNum = prompt('element');
    if (!isNaN(inputNum)) arr.push(inputNum);
}


const res = arr.reduce((uniq, el) => {
    if (!uniq.includes(el)) return [...uniq, el]
    else return uniq
}, [])
console.log(res);


// 3
const res_3 = arr.filter((elem, i) => (i === arr.indexOf(elem)))
console.log(res_3);
