// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 1
// function checkNumber(arr) {
//     return arr.every((elem) => (!isNaN(elem)) ? true : false);
// }

// function chooseEvenNumbers(arr) {
//     const check = checkNumber(arr);
//     if (check === true) return arr.filter((el) => (el % 2 === 0) ? true : false);
//     else return 'error'
// }
// let choose = chooseEvenNumbers(arr);
// console.log(choose);


// 2
const checkNumber = (arr) => arr.every((elem) => !isNaN(elem));

const chooseEvenNumbers = (arr) => {
    const check = checkNumber(arr);
    if (check === true) return arr.filter((el) => el % 2 === 0);
    else return 'error'
}
console.log(chooseEvenNumbers(arr));