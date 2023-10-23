// 8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна.


class DomHtml {
    middleware() {
        document.querySelector('button').addEventListener('click', () => {
            const inputValue = document.querySelector('input').value
            const p = document.querySelector('p');
            if (/[^d\-]+$/gm.test(inputValue)) p.innerHTML = true;
            else p.innerHTML = false;
        })
    }
}
const domHtml = new DomHtml();
domHtml.middleware()