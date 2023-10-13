// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива


const inp = document.querySelector('input');
const btn = document.querySelector('button');
const p = document.querySelector('p')
let arr = [];

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value is empty')
        arr.push(inp.value);
        const sum = arr.reduce((sum, el) => {
            return sum + +el;
        }, 0)
        p.textContent = sum / arr.length
        inp.value = '';
    } catch (error) {
        alert(error.message)
    }
})
