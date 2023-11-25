// 3. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх. Реализовать Html: input, button, div (для
// отображения результата проверки регулярного выражения)


class Html {
    isDate() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div = document.querySelector('div');

        btn.addEventListener('click', () => {
           inp.value.match(/^[1-3][0-9]\-[1-9]{2}\-[1-2][0-9]{3}$/gm)? 
           div.textContent = 'true':
           div.textContent = 'false';

            inp.value = '';
        })

    }
}
const html = new Html();
html.isDate();