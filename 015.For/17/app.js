// 17. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let str = '';

// 1
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        str += '-'
    }
    str += arr[i] + '-';
}
console.log(str);


// 2
const res =`-${arr.join('-')}-`
console.log(res);
