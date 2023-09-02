// 9. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество 


const obj = {
    id: 1,
    age: 10,
    name: 'Agata',
    surname: 'Klimova'
}

let res = 0;
for (const key in obj) {
    if (!isNaN(obj[key])) {
        res++
    }
}
console.log(res);