// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const btn = document.querySelector('button');
const par = document.querySelector('p')

// 1
btn.addEventListener('click', () => {
    if (btn.textContent === 'Показать') {

        par.textContent = 'Hi'
        btn.textContent = 'Скрыть'

    } else {
        par.textContent = '';
        btn.textContent = 'Показать'

    }
})



// 2
// let flag = false;
// btn.addEventListener('click', () => {
//     if (flag === false) {
//         par.style = 'visibility: hidden';
//         btn.textContent = 'Скрыть'
//         flag = true
//     } else {
//         par.style = 'visibility: visible';
//         btn.textContent = 'Показать'
//         flag = false
//     }
// })