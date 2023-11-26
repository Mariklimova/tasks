// 4. У вас есть 3 инпута. Необходимо вывести в div результат конкатенацию всех
// инпутов по клику на кнопку



class Html {
    getConcat() {
        const inp1 = document.querySelector('.first');
        const inp2 = document.querySelector('.second');
        const inp3 = document.querySelector('.third');
        const btn = document.querySelector('button')
        const div = document.querySelector('div');

        btn.addEventListener('click', () => {

            div.innerHTML = `${inp1.value}${inp2.value}${inp3.value}`;

            inp1.value = '';
            inp2.value = '';
            inp3.value = '';
        })
    }
}
const html = new Html();
html.getConcat();