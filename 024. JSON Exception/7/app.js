// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const str = '35';

function isValid(str) {
    if (isNaN(str)) throw new Error('not number')
}
function getMultyply(str) {
    try {
        isValid(str);
        const res = str.split('').map(el => el ** 2)
        return res.join('')
    } catch (error) {
        return error.message
    }
}
let res = getMultyply(str);
console.log(res);