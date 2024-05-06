// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
//  Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt();
const value = 'javascript'

const arr = [];

// // 1
// for (let i = 0; i < n; i++) {
//     let str = (prompt())
//     if (isNaN(str)) {
//         arr.push(str)
//     }
// }
// let res = arr.filter(function (el) {
//     return el.includes(value)
// })
// console.log(res);


// 2
for (let i = 0; i < n; i++) {
    let str = (prompt())
    if (isNaN(str)) arr.push(str)
}


const res_2 = arr.filter((el)=>el.includes(value))
console.log(res_2)


const newArr = []
arr.forEach((el)=>{
    if (el.includes(value)) {
        newArr.push(el)
    }
})
console.log(newArr);



