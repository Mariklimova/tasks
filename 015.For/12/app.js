// 12. Найдите минимальное значение в массиве используя цикл


let mas = [8, 9, 10, 11, 12, 13];
let res = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] < res && res != 0) {
        res = mas[i]
    }
}
console.log(res);