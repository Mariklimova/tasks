// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map


const n = 3;
const arr = []; 

for (let i = 0; i < n; i++) {
    let num = prompt('');
    if (!isNaN(num)){
    arr.push(+num)
    }
}
// const res = arr.map(function(el){
//   return  el**2 
// })

// let arr2 = [];
// arr.forEach(function(el){
//     arr.push(el**2);
// })
// console.log(arr2);


let arr3 = [];
for(let i=0; i<arr.length; i++){
arr3.push(arr[i]**2);
}
console.log(arr3);