// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. HTML разметка содержит кнопку button с начальным значением 0. Задача:
// • По клику на кнопку каждый раз добавлять +1 в текст кнопки. (Если первоначальный
// текст кнопки – 0, то после пятого, например, клика значение button – 5)

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
