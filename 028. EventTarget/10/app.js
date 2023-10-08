// 10. Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки


const inp = document.querySelector('input');
const btn = document.querySelector('button');
const par = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        let palindrome = inp.value.split('').reverse().join('')
        if (!isNaN(inp.value)) throw new Error('the value is not a string')
        if (inp.value === palindrome) {
            par.textContent = 'Это палиндром'
            inp.value = ''
        } else {
            par.textContent = 'Это не палиндром'
            inp.value = ''
        }
    } catch (error) {
        alert(error.message)
    }
})