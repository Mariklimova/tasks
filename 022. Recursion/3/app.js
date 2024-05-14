// 3. На входе число n = 5. Вычислите сумму натуральных чисел от 1 до n используя
// рекурсию

let n = 5;

function sumNum(n) {
  if (n === 0) return 0;
  return n + sumNum(n - 1)
}
const res = sumNum(n);
console.log(res);