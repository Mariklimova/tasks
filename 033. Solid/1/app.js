// 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

const btn = document.querySelector('button');
const inp_1 = document.querySelector('.val_1');
const inp_2 = document.querySelector('.val_2');
const sum = document.querySelector('.sum');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');


class DomHtml {
    mainAction() {
        btn.addEventListener('click', () => {
            this.doPlus();
            this.doMinus();
            this.doMultiply();
            this.doDivide();

        })
    }
    doPlus() {
        sum.textContent = `Результат суммы: ${+inp_1.value + +inp_2.value}`;
    }
    doMinus() {
        minus.textContent = `Результат разности: ${+inp_1.value - +inp_2.value}`;
    }
    doMultiply() {
        multiply.textContent = `Результат произведения: ${+inp_1.value * +inp_2.value}`;
    }
    doDivide() {
        divide.textContent = `Результат деления: ${+inp_1.value / +inp_2.value}`;
    }
}
const domHtml = new DomHtml();
domHtml.mainAction()