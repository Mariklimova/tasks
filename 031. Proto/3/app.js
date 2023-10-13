// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const inp = document.querySelector('input');
const btn = document.querySelector('button');
const p = document.querySelector('.arr');
const pNew = document.querySelector('.obj');
const arr = []
const obj = {};

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value is empty');
        arr.push(inp.value)
        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i]
        }
        p.textContent = arr;
        pNew.textContent = JSON.stringify(obj);
        inp.value = '';
    } catch (error) {
        alert(error.message)
    }
})