// 5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию

let n = 2;

let step = 5;

function getStep(n, step) {
    if (step === 1) return n
    return n * getStep(n, step - 1)

}
const res = getStep(n, step)
console.log(res);