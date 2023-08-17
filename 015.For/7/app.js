// 7. Преобразуйте первую букву строки в верхний регистр несколькими способами


let str = 'оператор break применяется для прерывания текущей итерации.';

// 1
console.log(str[0].toUpperCase() + str.slice(1));

// 2
let res = '';
for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        res += str[i].toUpperCase();
    } else {
        res += str[i];
    }
}
console.log(res);

