// 6. На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
    id: 3,
    age: 65,
    name: 'Marina',
    lastName: 'Klimova'


}
for (const key in obj) {
    if (!isNaN(obj[key])) {
        obj[key] *= 2
    }
}
console.log(obj);