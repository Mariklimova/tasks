// 2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя
// рекурсию

let i = 5;

function getNums(i) {
    if (i === 0) return i
    if (i % 2 == 0) {
        return `${i} ` + getNums(i - 1)
    } else {
        return getNums(i-1)
    }


}
let res = getNums(i)
console.log(res);