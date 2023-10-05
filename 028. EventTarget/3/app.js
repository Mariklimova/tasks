// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const btn = document.querySelector('button');
const par = document.querySelector('p')

// btn.addEventListener('click', ()=>{
//     if (par.textContent == 'Показать') {
//         par.textContent = 'Hi'
// btn.textContent = 'Скрыть'
//     }else{

//     }
// })
let flag = false;
btn.addEventListener('click', () => {
    if (flag === false) {
        par.style = 'visibility: hidden';
        btn.textContent = 'Скрыть'
        flag = true
    } else {
        par.style = 'visibility: visible';
        btn.textContent = 'Показать'
        flag = false
    }
})