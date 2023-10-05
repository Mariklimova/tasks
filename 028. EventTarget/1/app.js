// 1. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const ul = document.querySelector('ul');
const parag = document.querySelector('p');


ul.addEventListener('click',(event)=>{
    console.log(event.target);
    parag.textContent = event.target.textContent;
})