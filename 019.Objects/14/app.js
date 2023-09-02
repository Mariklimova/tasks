// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения


const obj = {
    0: 7,
    1: 7,
    2: 7,
    3: 6,
    4: 6,
    5: 5,
    6: 5,
}

// 1
const nArr = [];

for (const key in obj) {
    nArr.push(obj[key])
}


const uniq = [];

for (let i = 0; i < nArr.length; i++) {
    if (!uniq.includes(nArr[i])) {
        uniq.push(nArr[i])
    }
}

const res = {};
uniq.forEach(function (elem, index) {
    res[index] = elem
});
console.log(res);

