// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = 4;
const arr = [];


for (let i = 0; i < n; i++) {
    const num = prompt();
    if (!isNaN(num)) arr.push(+num);
}


let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) break
    else sum += arr[i];
}
console.log(sum);

let isNull = false;
let res = arr.reduce((sum2, el)=> {
    if (el === 0 || isNull == true) {
        isNull = true;
        return sum2 + 0;
    } else {
        return sum2 + el;
    }
}, 0)
console.log(res);














