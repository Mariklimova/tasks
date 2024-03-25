// 7. Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел


const v1 = prompt('введите значение скорости v1');
const v2 = prompt('введите значение скорости v2');
const s = prompt('введите значение расстояния s');

// 1
if (isNaN(v1) || isNaN(v2) || isNaN(s)) {
    console.log('error');
} else {
    console.log(s / (v1 + v2));
}

// 2
isNaN(v1) || isNaN(v2) || isNaN(s) ? console.log('error') : console.log(s / (v1 + v2))

// 3
console.log(isNaN(v1) || isNaN(v2) || isNaN(s) ? 'error' : s / (v1 + v2));

// 4
if (isNaN(v1) || isNaN(v2) || isNaN(s)) console.log('error');
else console.log(s / (v1 + v2));