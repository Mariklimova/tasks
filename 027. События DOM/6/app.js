// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const btn = document.querySelector('.btn');
const inp = document.querySelector('input');


btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value is empty')
        if (inp.value !== '!!!') throw new Error('the condition is not correct')
        inp.value = '???'
    } catch (error) {
        alert(error.message)
    }
})
