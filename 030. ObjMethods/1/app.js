// 1. Создайте объект, представляющий информацию о товарах в интернет-магазине
// (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.keys() для
// подсчета общего количества различных товаров.

const obj = {
    product1: 10,
    product2: 5,
    product3: 8
}
function isValid(val) {
    val.forEach(function (el) {
        if (isNaN(el)) throw new Error('value not number')
    })
}

// function sumElement(obj) {
//     try {
//         const val = Object.values(obj);
//         isValid(val);
//         const res = val.reduce(function (sum, el) {
//             return sum += el;
//         }, 0)
//         return res
//     } catch (error) {
//         return error.message;
//     }

// }
// const res = sumElement(obj);
// console.log(res);


// 2
function isValid(val) {
    val.forEach((el)=>{
        if (isNaN(el)) throw new Error('value not number')
    })
}

function sumElement(obj) {
    try {
        const val = Object.values(obj);
        isValid(val);
        return val.reduce((sum, el)=> sum += el, 0)
    } catch (error) {
        return error.message;
    }

}
const res = sumElement(obj);
console.log(res);