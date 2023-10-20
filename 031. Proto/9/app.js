// 9. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)


const n = Math.round(Math.random() * 10);

function doObject(n) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.round(Math.random() * 10);
    }
    return obj;
}
function numberPairs(n) {
    const data = doObject(n);
    console.log(data);
    let check = 0;
    for (key in data) {
        if (data[key]) check++
    }
    return check
}
const res = numberPairs(n)
console.log(res);