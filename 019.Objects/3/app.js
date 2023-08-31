// 3. На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    id: 436,
    name: 'Marina',
    age: '25',
}
for (const key in obj) {
    if (!isNaN(obj[key])) {
       console.log(obj[key]);
        
    }
}