// 5. Создайте функцию, которая принимает объект и возвращает массив всех его
// значений, используя Object.values().

const obj = {
    id: 1,
    name_: 'Agata',
    age: 9
}

function returnArr(obj) {
    return Object.values(obj);
}
const res = returnArr(obj);
console.log(res);