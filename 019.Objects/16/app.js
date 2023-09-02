// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив


const obj = {
    id: + prompt(),
    age: + prompt(),
    namber: + prompt(),
    1: + prompt(),
    text: + prompt()
}

const arr = [];

for (const key in obj) {
    if (key) {
        arr.push(obj[key]);
    }
}
console.log(arr);