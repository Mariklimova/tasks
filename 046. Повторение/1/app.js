// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {
    bindOption(){
        const btn = document.querySelector('button')
        const div = document.querySelector('div')
        const inp = document.querySelector('input')

        btn.addEventListener('click',()=>{
            try {
                if(!inp.value.trim()) throw new Error ('value is empty')
                div.innerHTML = inp.value;
                div.style = 'color:black';
                inp.value = '';
            } catch (error) {
               div.innerHTML = error.message;
               div.style = 'color:red';
            }
        })
    }
    
}
const html = new HTML()
html.bindOption();
