



const obj = {
    id: 1,
    name: 'Nastya',
    age: 25,
    city: 'Minsk'
}

function isValid(count) {
    if (count ==0) throw new Error('Invalid')
    return true
}
function countKeys(obj) {
    try {
        let count = 0;
        for (let key in obj) {
            count++
        }
        isValid(count);
        return count

    } catch (error) {
        return error.message;
    }
}
const res = countKeys(obj);
console.log(res);