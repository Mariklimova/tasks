// 2. На входе массив. Реализуйте две функции. Первая проверяет, что все элементы
// массива положительные числа. Вторая функция возвращает массив, в котором
// каждое положительное число умножено на 2. Если результат проверки - true,
// вызывайте вторую функцию и возвращайте полученный массив.

const arr = [232, 45, 6, 77, 6];


// 1
function checkPositiv(arr) {
    const check = arr.every(function (el) {
        if (el > 0) {
            return true
        } else {
            return false
        }
    })
    return check
}

function getMultiplay(arr) {
    const check = checkPositiv(arr);
    if (check) {
        const nArr = [];
        for (let i = 0; i < arr.length; i++) {
            nArr.push(arr[i] * 2)
        }
        return nArr
    } else {
        return 'error'
    }
}
const result = getMultiplay(arr);
console.log(result);



// 2

const getMultiplay_2 = (arr) => {
    const checkPositiv = (arr) => arr.every((el) => (el > 0));

    if (checkPositiv(arr)) return arr.map((el) => el * 2);
    else return 'error'
}
console.log(getMultiplay_2(arr));