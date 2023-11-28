// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. HTML разметка содержит кнопку button с начальным значением 0. Задача:
// • По клику на кнопку каждый раз добавлять +1 в текст кнопки. (Если первоначальный
// текст кнопки – 0, то после пятого, например, клика значение button – 5)

class HTML {
    bindOption() {
        const btn = document.querySelector('button');
        let count = 0;

        btn.addEventListener('click', () => {
            count++
            btn.innerHTML = count;
        })
    }
}
const html = new HTML();
html.bindOption();
