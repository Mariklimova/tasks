// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const num = prompt('введите значение');

function isValidEven(num) {
    try {
        if (isNaN(num)) throw new Error('это не число')
        if (num % 2 !== 0) throw new Error('это число не является четным')
        return true

    } catch (error) {
        return error.message
    }

}
const result = isValidEven(num);
console.log(result);