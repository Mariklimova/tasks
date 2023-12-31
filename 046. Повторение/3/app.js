// 3. Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
// содержащие по 1 обработчику события в каждом из методов. HTML разметка
// содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
// кнопку button с текстом -1. Задача:
// • По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
// • По клику с текстом на кнопку -1 необходимо отнять из счетчика -1. 

class HTML {
    bindOptionPlus() {
        const btn_plus = document.querySelector('.plus')
        const div = document.querySelector('div')
        btn_plus.addEventListener('click', () => {
            div.innerHTML++;
        })
    }

    bindOptionMinus() {
        const btn_minus = document.querySelector('.minus');
        const div = document.querySelector('div')
        btn_minus.addEventListener('click', () => {
            div.innerHTML--;
        })

    }
}
const html = new HTML();
html.bindOptionMinus();
html.bindOptionPlus();
