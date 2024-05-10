// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива


const n = prompt();

// 1
// function makeArr(n) {
//     const arr = [];

//     for (let i = 0; i < n; i++) {
//         arr.push(prompt())
//     }
//     return arr

// }
// const array = makeArr(n)

// function findCount(array) {
//     return array.length
// }
// const res = findCount(array)
// console.log(res);


// 2
const makeArr = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}
const resultArr = makeArr(n)

const findCount = (resultArr) => resultArr.length
console.log(findCount(resultArr));