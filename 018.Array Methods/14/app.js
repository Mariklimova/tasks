// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt('введите количество элементов массива');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

// 1
const nArr = [];
arr.forEach(function (el) {
    nArr.push('#' + el)
})
console.log(nArr);


// 2
const res = arr.map(function (el) {
    return `#${el}`;
})
console.log(res);

// 3
const newArr = [];
arr.forEach((el) => newArr.push('#' + el))
console.log(newArr);


// 3'
const res_3 = arr.map((el)=>`#${el}`);
console.log(res_3);

