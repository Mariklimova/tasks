// 3. Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

const nums = '[1,2,3,4,5,6]';

function parsingData(nums) {
    try {
        const parsing = JSON.parse(nums)
        const res = parsing.some(el => isNaN(el));
        if (res) {
            throw new Error('есть строка')
        }
        return parsing.filter(el => {
            if (el % 3 === 0) {
                return true
            }
        })
    } catch (error) {
        return error.message
    }
}
const res = parsingData(nums)
console.log(res);
