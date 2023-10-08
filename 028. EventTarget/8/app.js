// 8. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 


const inp = document.querySelector('input');
const btn = document.querySelector('button');
const res = document.querySelector('.result');
newArr = [];


btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('There is no value');
        newArr.push(inp.value)
        res.innerHTML = newArr;
        inp.value = '';
        res.style = 'color:black'
    } catch (error) {
        res.textContent = error.message;
        res.style = 'color:red'
        inp.value = '';
    }
})
