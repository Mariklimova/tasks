// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map


const n = 5;
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}


// 1
const res = arr.map(function (el) {
    if (el % 2 === 0) {
        return 'чет';
    } else {
        return 'нечет';
    }
})
console.log(res);


const nArr = [];
arr.forEach(function (el) {
    if (el % 2 === 0) {
        nArr.push('чет');
    } else {
        nArr.push('нечет');
    }
})
console.log(nArr);



// 2
const res_2 = arr.map((el)=>el % 2 === 0?'чет':'нечет');
console.log(res_2);

const newArr = [];
arr.forEach((el)=>el % 2 === 0? newArr.push('чет'):newArr.push('нечет'));
console.log(newArr);