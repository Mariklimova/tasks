// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

const a = 6;
const b = 3;
const c = 'n';

function isValidNums(a,b,c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error ('Вы ввели не число')
    return true
}

function buildTriangle(a, b, c,) {
    try {
        isValidNums(a, b, c);
        if (a < b + c && b < a + c && c < a + b) return true
        else return false
    } catch (error) {
        return error.messange
    }
}
const res = buildTriangle(a, b, c);
console.log(res);




