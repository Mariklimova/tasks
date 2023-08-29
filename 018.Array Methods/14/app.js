// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

// let nArr = [];
// arr.forEach(function (el) {
//     nArr.push('#' + el)
// })
// console.log(nArr);


// 2
let res = arr.map(function (el) {
    return `# ${el}`;
})
console.log(res);

