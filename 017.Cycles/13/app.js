// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of


const arr = [-2, -8, 0, 25, 67];
let res = 0;


for (let i of arr) {
    if (i > 0) {
        res += i;
    }
}
console.log(res);