// 5. При наведении курсора на изображение, необходимо осуществить замену этого
// изображения на другое.


class Html {
    replaceImage() {
        const img = document.querySelector('.img');

        img.addEventListener('mouseover', () => {
            img.style = ' background-image: url(./assets/okean.jpg);';
        })
        img.addEventListener('mouseout', () => {
            img.style = ' background-image: url(./assets/text.jpg);';
        })
    }
}
const html = new Html();
html.replaceImage();