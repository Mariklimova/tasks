// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obj = {};
const key = {};
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
       obj[key] = true;
    } else {
        obj[key] = false;
    }
    obj.key = arr[i];
}
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
console.log(obj);

