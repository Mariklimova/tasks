// 10. Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.


const num = +prompt();


for (let i = 0; i < 3; i++) {
   console.log(Math.sqrt(num).toFixed(i));
}