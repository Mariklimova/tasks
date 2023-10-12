// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector('button');
const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');


btn.addEventListener('click', () => {
    try {
        if (!inp1.value || !inp2.value) throw new Error('value is empty')
        if (inp1.value === '!!!') {
            inp1.value = '???';
            inp2.value = '!!!'
        } else {
            inp1.value = '!!!';
            inp2.value = '???'
        }
    } catch (error) {
        alert(error.message)
    }
})
