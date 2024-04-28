// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.


let str = 'оператор break применяется для прерывания текущей итерации.'.split(' ');
let res = '';

// 1
for (let i = 0; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}
console.log(res.trim());





