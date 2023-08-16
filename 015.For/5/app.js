// 5. Найдите максимальное значение в статичном массиве используя цикл. 


let mas = [1, 3, 5, 6, 8];
let res = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > res) {
        res = mas[i]
    }
}
console.log(res);