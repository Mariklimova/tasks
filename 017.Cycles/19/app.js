// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

let num = +prompt('введите количество элементов массива');
let res = [];

for (let i = 0; i < num; i++) {
    let pr = prompt('введите элемент массива')
    if (isNaN(pr)) {
        res.push(pr)
    }
}
console.log(res);
