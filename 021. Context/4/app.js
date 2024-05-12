// 2. Напишите функцию, которая принимает массив строк и находит строку с
// максимальной длиной. Добавить проверки

const arr = ['jkklk', 'hnkjoijij', 'vfj', 'jdfddfjfghjghj'];

// 1
// function doMaxMin(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max = arr[i].length;
//         }

//     }
//     const maxWord = arr.filter((elem) => (elem.length === max) ? elem : null)
//     return maxWord
// }
// let res = doMaxMin(arr);
// console.log(res);



// 2
const findMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) max = arr[i].length;
    }
    return arr.filter((elem) => (elem.length === max) ? elem : null);
}
console.log(findMax(arr));