// 6. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо в отдельный div вывести все числа кратные 3

class Html {

    findMultiple() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div1 = document.querySelector('.first');
        const div2 = document.querySelector('.second');

        const arr = [];
        btn.addEventListener('click', () => {
            arr.push(inp.value)
            div1.innerHTML = arr;
            const arr_multi = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 3 === 0) arr_multi.push(arr[i]);

            }
            div2.innerHTML = arr_multi;
            inp.value = '';
        })

    }
}
const html = new Html();
html.findMultiple();