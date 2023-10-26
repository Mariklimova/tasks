// 1. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]


const n = +prompt();

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {

        arr.push(prompt())
    }
    return arr
}



function filterArrs(n) {
    let res = doArr(n);
    return res.filter((el)=> el[0]==='a'||el[0]==='h' )
}
const filter = filterArrs(n);
console.log(filter);