// 6. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое


const btn = document.querySelector('button');
const input = document.querySelector('input')


btn.addEventListener('click', () => {
    try {
        if (!input.value) throw
        const arr = [];
        arr.push(input.value);
        p.innerHTML += arr;
        input.value = '';
    } catch (error) {
        alert(error, message)
    }
})