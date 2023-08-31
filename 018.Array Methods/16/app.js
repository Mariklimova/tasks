// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить проверки на ввод числа
// (значение n не должно быть больше длины массива, 0, пустая строка, строковый
// тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]




// let arr = [1, 2, 3, 4, 5, 6];
// let n = 7; //после проверки заменить на промт
// let res = [];

// if (isNaN(n) && n > arr.length && n !== (null || undefined)) {
//     console.log('error');
// } else {
//     for (let i = 0; i < n; i++) {
//         arr[i] = [1, 2, 3, 4, 5, 6];
//         res.push(arr[i]);
//     }
//     console.log(res);
// }


// for (let i = 0; i < n; i++) {
//     arr[i] = [];
//     res.push(arr[i]);
// }
// console.log(res);




function coverTonewArr(arr, rows, n) {
    // if (isNaN(n) && n > arr.length && n !== (null || undefined)&&typeof n) {
//     console.log('error');
// } else {
    let newArr = [];
    let el = 0;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (j = 0; j < n; j++) {
            if (el < arr.length) {
                row.push(arr[el]);
                el++;

            }else{
                console.log('error');
            }
        }
        newArr.push(row);
    }
    return newArr;
}
let oneArr = [1, 2, 3, 4, 5, 6];
let n = 7;
let rows = oneArr.length/n;
let newArr = coverTonewArr(oneArr, rows, n);
console.log(newArr);


