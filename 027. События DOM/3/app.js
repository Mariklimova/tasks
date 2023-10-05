// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector('.btn')
const inp = document.querySelector('input')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value empty')
        alert(inp.value)
    } catch (error) {
        alert(error.message);
    }
})
