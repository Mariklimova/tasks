// 2. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const inp = document.querySelector('input');
const btn = document.querySelector('button');
const pArr = document.querySelector('.arr');
const pUni = document.querySelector('.unique');
const arr = []

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('value is empty');
        arr.push(inp.value)
        const resArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!resArr.includes(arr[i])) resArr.push(arr[i])
            else continue
        }
        pArr.textContent = arr;
        pUni.textContent = resArr;
        inp.value = '';
    } catch (error) {
        alert(error.message)
    }
})

