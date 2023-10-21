// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое



const btn = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('p')


btn.addEventListener('click', () => {
    try {
        if (!input.value) throw new Error('value is empty');
        if (!p.textContent) {
            p.innerHTML += input.value;
            input.value = '';
        } else {
            p.innerHTML += ',' + input.value;
            input.value = '';
        }
    } catch (error) {
        alert(error.message)
    }
})


// 2
// const btn = document.querySelector('button')
// const input = document.querySelector('input')
// const p = document.querySelector('p')
// const arr = []
// btn.addEventListener('click', () => {
//     try {
//         if (!input.value) throw new Error('value is empty');
//         arr.push(input.value)
//         p.innerHTML = arr
//     } catch (error) {
//         alert(error.message)
//     }
// })