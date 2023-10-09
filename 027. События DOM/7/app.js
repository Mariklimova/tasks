// 7. Записать в результат удвоенное значение инпута. Добавить проверки 

const inp = document.querySelector('input');
const btn = document.querySelector('.button');
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value is empty')
        p.textContent = `Результат: ${inp.value * 2}`;
    } catch (error) {
        alert(error.message)
    }
})