// 6. Реализуйте функцию, которая будет подсчитывать количество своих вызовов с
// использованием замыкания. Каждый раз, когда функция вызывается, счетчик
// увеличивается на 1 и возвращает текущее значение счетчика.

function getFuncion() {
    let count = 0;
    return function () {
        count++
        console.log(count);
    }
}
const res = getFuncion()
res();
res();
res();
res();
res();