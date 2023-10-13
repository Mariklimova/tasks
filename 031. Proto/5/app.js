// 5. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('button');
const fWord = document.querySelector('#fWord');
const secWord = document.querySelector('#secWord');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        if (!fWord.value || !secWord.value) throw new Error('value is empty');
        let count = 0;
        for (let i = 0; i < fWord.value.length; i++) {
            if (secWord.value.includes(fWord.value[i])) count++

        }
        if (count >= 3) p.textContent = true
        else p.textContent = false
    } catch (error) {
        alert(error.message)
    }
})
