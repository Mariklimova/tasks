// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

const arr_1 = [];
const arr_2 = [];

// 1
// for (let i = 0; i < 5; i++) {
//     arr_1.push(prompt('введите значения массива 1'));
// }

// for (let i = 0; i < 5; i++) {
//     arr_2.push(prompt('введите значения массива 2'));
// }

// str_1 = arr_1.join('');
// str_2 = arr_2.join('');

// if (str_1 === str_2) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// 2
for (let i = 0; i < 10; i++) {
    i < 5 ? arr_1.push(prompt('введите значения массива 1')) : arr_2.push(prompt('введите значения массива 2'));
}
console.log(arr_1.join('') === arr_2.join('')) ? true : false;


// 3
console.log(arr_1.toString() === arr_2.toString()) ? true : false;


// 4
const res = arr_1.every((el,index)=>el===arr_2[index]);
console.log(res);
