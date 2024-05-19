// 4. На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта

const obj = {
    id: 1,
    name: 'Nastya',
    age: 25,
    city: 'Minsk'
}


// 1
// function doArr(obj) {
//     return Object.values(obj)
// }
// const res = doArr(obj);
// console.log(res);



// 2
const doArr = (obj) => Object.values(obj)
console.log(doArr(obj));