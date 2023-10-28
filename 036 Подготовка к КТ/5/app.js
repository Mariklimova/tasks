// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута


const btn = document.querySelector('button');
const input = document.querySelector('input');
const res = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        if (!input.value) throw new Error('value is empty');
        if (input.value < 0) throw new Error('the number is negative');
        res.textContent = input.value * 2;
        input.value = '';
    } catch (error) {
        res.innerHTML = error.message
        input.value = ''
    }
})