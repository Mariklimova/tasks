// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn_left = document.querySelector('.btn-left');
const btn_right = document.querySelector('.btn-right');
const inp1_left = document.querySelector('.inp1-left');
const inp2_left = document.querySelector('.inp2-left');
const inp1_right = document.querySelector('.inp1-right');
const inp2_right = document.querySelector('.inp2-right');


btn_left.addEventListener('click', () => {
    inp1_left.value.textContent = inp2_left.value;
    inp2_left.value.textContent = inp1_left.value;
})
