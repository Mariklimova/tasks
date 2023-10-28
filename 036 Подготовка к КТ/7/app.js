// 7. Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое


const btn = document.querySelector('button');
const input = document.querySelector('input');


function isValid() {
    if (!input.value) throw new Error('value is empty')
}
btn.addEventListener('click', () => {
    const value = document.querySelector('.value');
    const duble = document.querySelector('.duble');
    try {
        isValid(input);

        value.innerHTML += input.value + ',';
        duble.innerHTML += input.value * 2 + ',';
        input.value = '';

    } catch (error) {
        alert(error.message)
    }
})
