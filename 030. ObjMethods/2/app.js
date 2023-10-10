// 2. У вас есть объект, представляющий собой список студентов и их оценок
// (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.keys() и Array.filter()
// для фильтрации студентов, у которых оценки выше определенного порога.

const obj = {
    Анна: 95,
    Иван: 88,
    Мария: 92
}

function isValid(val) {
    val.forEach((el) => {
        if (isNaN(el)) throw new Error('error')
    })
}
function firstStudents(obj, num) {
    try {
        let val = Object.values(obj);
        isValid(val);
        let res = val.filter((el) => {
            if (el > num) return el
        })
        if (res.length === 0) throw new Error ('error')
        return res
    } catch (error) {
        return error.message
    }
}
const res = firstStudents(obj, 50);
console.log(res);