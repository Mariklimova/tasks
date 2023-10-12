// 6. Создайте функцию, которая принимает объект и имя свойства. Используйте
// hasOwnProperty, чтобы проверить, существует ли данное свойство в объекте, и
// вернуть соответствующее сообщение.

const obj = {
    id: 1,
    name_: 'Artem',
    age: 25
}
const str = 'id';

function findStr(obj, str) {
    let bool = obj.hasOwnProperty(str);
    if (bool) return true
    else throw new Error('error')
}
let res = findStr(obj, str);
console.log(res);