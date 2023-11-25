// 2. Вы вводите числа в поле для ввода формируя массив. Необходимо отобразить
// массив, а также отдельно все четные элементы этого массива и нечетные. Вы
// вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// Реализовать Html: input, button, div (для отображения результатов)
// [1, 1, 4, 2, 3, 3] -> [4, 2]


class Html {
    countIven() {
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const div1 = document.querySelector('.first');
        const div2 = document.querySelector('.second');

        const arr = [];
        btn.addEventListener('click', () => {
            const arr_unique = [];
            arr.push(inp.value)
            div1.innerHTML = arr;
            let arr_sort = arr.sort((a, b) => a - b)
            for (let i = 0; i < arr_sort.length; i++) {
                if (arr_sort[i] !== arr_sort[i + 1] && arr_sort[i] !== arr_sort[i - 1]) arr_unique.push(arr[i])

            }
            div2.innerHTML = arr_unique;
            inp.value = '';
        })

    }
}
const html = new Html();
html.countIven();