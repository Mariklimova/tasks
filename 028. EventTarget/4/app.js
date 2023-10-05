// 4. По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector('button');
const paragraf = document.querySelector('p')

btn.addEventListener('mouseover', () => {
    paragraf.textContent = 'Hi'
})
btn.addEventListener('mouseout', () => {
    paragraf.textContent = ''
})