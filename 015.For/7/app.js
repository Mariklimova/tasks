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


// 3
let res3 = '';
for (let i = 0; i < str.length; i++) {
    (i === 0) ? res3 += str[i].toUpperCase() : res3 += str[i];
}
console.log(res3);

