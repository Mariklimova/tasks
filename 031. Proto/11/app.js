// 11. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE


const obj = {
    id: 1,
    name: 'Andrey',
    age: 30,
    role: 'student'
}

const res = (function getNewObj(obj) {
    let newObj = {};
    for (const key in obj) {
        if (!isNaN(obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}(obj));
console.log(res);