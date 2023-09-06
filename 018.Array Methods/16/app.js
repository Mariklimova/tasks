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


const inputArr = [1, 2, 3, 4, 5, 6];
const n = 5;

const arrWraper = [];
let arrItem = [];
if (!n || isNaN(n) || n <= 0 || n > inputArr.length) console.log('error');
else {
    for (let i = 0; i < inputArr.length; i++) {
        arrItem.push(inputArr[i]);

        if (arrItem.length === n || (i === inputArr.length - 1 && arrItem.length !== n)) {
            arrWraper.push(arrItem)
            arrItem = []
        }
    }
    console.log(arrWraper);
}





