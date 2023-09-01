// 5. На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.


const obj = {
    id: 2,
    age: 11,
    1: 3,
    long: 1
}

const arr = [];

for (const key in obj) {
    if (isNaN(key)) {
       continue;
    }else{
        if (key % 2 != 0) {
            arr.push(key)
        }  
    }
}
console.log(arr);