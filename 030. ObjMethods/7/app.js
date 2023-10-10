// 7. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str используя Object.values ()

const obj = {
    id: 1,
    name_: 'Artem',
    age: 25
}

const str = 'Artem';

function findVal(obj, str) {
    try {
        let val = Object.values(obj);
        if (val.includes(str)) return true
        else throw new Error ('error')
    } catch (error) {
return error.message
    }
}
let res = findVal(obj, str);
console.log(res);