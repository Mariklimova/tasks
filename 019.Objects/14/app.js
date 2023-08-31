// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 0 : 7, 0 : 7,
// 1 : 7, 1 : 6,
// 2 : 6, 2 : 5,
// 3 : 5, -> 3 : 2,
// 4 : 2, 4 : 1
// 5 : 2 }
// 6 : 1
// }


const obj = {
    0: 7,
    1: 7,
    2: 7,
    3: 6,
    4: 6,
    5: 5,
    6: 5,
}
const nArr = [];

for (const key in obj) {
    nArr.push(obj[key])
}
console.log(nArr);


const uniq = [];

for (let i = 0; i < nArr.length; i++) {
    if (!uniq.includes(nArr[i])) {
        uniq.push(nArr[i])
    }
}
console.log(uniq);

const res = {};
uniq.forEach(function(elem, index){
res[index]=elem
});
console.log(res);