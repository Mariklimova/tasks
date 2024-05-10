// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 


const date = 'xx/xx/xxxx';

// 1
// function isValidSLSH(date) {
//     return date.includes('/') ? true : false;
// }

// function changeDate(date) {
//     const bool = isValidSLSH(date)
//     if (bool === true) {
//         return date.split('/').reverse().join('-');
//     } else {
//         return 'error'
//     }
// }
// const res = changeDate(date)
// console.log(res);


// 2

const changeDate = (date) => {
    const isValidSLSH = (date) => date.includes('/') ? true : false;

    if (isValidSLSH(date) === true) return date.split('/').reverse().join('-');
    else return 'error'
}
console.log(changeDate(date));