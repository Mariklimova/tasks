// 2. Напишите функцию, которая принимает массив строк и находит строку с
// максимальной длиной. Добавить проверки

const arr = ['jkklk', 'hnkjoijij', 'vfj', 'jdfddfjfghjghj'];

function doMaxMin(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }

    }
    let maxWord = arr.filter((elem) => (elem.length === max) ? elem : null)
    return maxWord
}
let res = doMaxMin(arr);
console.log(res);