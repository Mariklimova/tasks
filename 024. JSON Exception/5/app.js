// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const num = 5;
function getArr(num) {
    const newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(+prompt())
    }
    return newArr
}


// 1
// function isValid(arr) {
//     if (!Array.isArray(arr)) throw new Error('не массив')
//     const check = arr.every(function (el) {
//         if (isNaN(el)) return false
//         else return true
//     })
//     if (!check) throw new Error('вы ввели не число')
//     return check
// }
// function findRange(arr) {
//     try {
//         isValid(arr);
//         const res = arr.filter(function (el) {
//             if (el > 10 && el < 100) return true
//         })
//         return res
//     } catch (error) {
//         return error.message
//     }
// }
// const arr = getArr(num)
// const res = findRange(arr)
// console.log(res);


// 2
function isValid(arr) {
    if (!Array.isArray(arr)) throw new Error('не массив')
    const check = arr.every((el) => !isNaN(el))
    if (!check) throw new Error('вы ввели не число')
    return check
}
function findRange(arr) {
    try {
        isValid(arr);
        return arr.filter((el) => el > 10 && el < 100)
    } catch (error) {
        return error.message
    }
}
const arr = getArr(num)
const res = findRange(arr)
console.log(res);