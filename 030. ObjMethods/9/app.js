// 2. Создайте функцию, которая принимает два объекта. Используйте hasOwnProperty,
// чтобы объединить только те свойства, которые существуют в обоих объектах

const obj_1 = {
    id: 1,
    name_: 'Agata',
    age: 9,
    role: 'student'
}

const obj_2 = {
    id: 1,
    name_: 'Marina',
    age: 22,
    role: 'student'
}
let newObj = {};

function mergeObjects(obj_1, obj_2) {
    for (const key in obj_1, obj_2) {
        if (obj_1.hasOwnProperty(obj_1[key]) !== obj_2.hasOwnProperty(obj_2[key])) {
            newObj += obj_1[key]
        }
    }
    return newObj
}
const res = mergeObjects(obj_1, obj_2);
console.log(res);