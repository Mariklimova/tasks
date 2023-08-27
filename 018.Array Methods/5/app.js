// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

let arr1 = [];
let arr2 = [];

for (let i = 0; i < 5; i++) {
    arr1.push(prompt('введите значения массива 1'));
}

for (let i = 0; i < 5; i++) {
    arr2.push(prompt('введите значения массива 2'));
}

str1 = arr1.join('');
str2 = arr2.join('');

if (str1 === str2) {
    console.log(true);
} else {
    console.log(false);
}

