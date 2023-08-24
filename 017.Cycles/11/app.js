// / 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива


let arr = ['fjsdjv', 'fhisj', 2, 56, 78, true];
let nArr = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        nArr.push(arr[i]);
    }
}
console.log(nArr);