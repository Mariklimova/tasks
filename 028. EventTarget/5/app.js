// 5. По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector('button')

btn.addEventListener('dblclick', (event) => {
    event.currentTarget.style = 'background-color:red'
})