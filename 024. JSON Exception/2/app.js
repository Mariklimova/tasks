// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 2, 3, 4, 'y', 6, 7];

function findStr(arr) {
    try {
        let bool = arr.every(el => typeof el === 'number' ? true : false);
        if (!bool) throw new Error('имеется строка')
        return true
    } catch (error) {
        return error.message
    }
}
let res = findStr(arr)
console.log(res);