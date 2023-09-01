// 8. На входе статичный объект. Необходимо посчитать количество пар (ключ:  значение)

const obj = {
    id: 1,
    name: 'Agata',
    age: 10,
};

let res = 0;
for (const key in obj) {
    if (key) {
        res++
    }
}
console.log(res);