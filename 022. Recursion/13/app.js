// 5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81


function test(n, step) {
    if (step === 1) return n

    return n * test(n, step - 1)

}
console.log((test(2,5)));







