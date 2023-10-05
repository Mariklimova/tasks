// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки


let btn = document.querySelector('.btn');

function isValid(inp) {
    if (!inp.value) throw new Error('value is empty')
    if (isNaN(inp.value)) throw new Error('value is not number');
    if (inp.value < 0) throw new Error('число отрицательное');
}

btn.addEventListener('click', () => {
    try {
        let inp = document.querySelector('input');
        isValid(inp)
        alert(inp.value)
    } catch (error) {
        alert(error.message)
    }
})

