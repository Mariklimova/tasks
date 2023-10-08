// 9. Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const img = document.querySelector('.img');


img.addEventListener('mouseover', () => {
    img.style = 'background-image:url(./assets/dobrogoutra_ru_5408.jpg);'
})

img.addEventListener('mouseout', () => {
    img.style = 'background-image:url(./assets/dobrogoutra_ru_3779.jpg);'
})