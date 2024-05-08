// 2. На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
    id: 'text',
    1: 22,
    2: 'cjdcj',
    text: 23,
}
for (let key in obj) {
    if (!isNaN(key))  console.log(key);
}