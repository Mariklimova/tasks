// 4. По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');



btn.addEventListener('click', () => {
    try {

        const { value } = inp;
        if (!isNaN(value)) throw new Error('not string')
        let result = ''
        const arr = value.trim().split(' ')
        for (let i = 0; i < arr.length; i++) {
            result += arr[i][0].toUpperCase() + arr[i].slice(1)
        }
        p.textContent = result[0].toLowerCase()+result.slice(1);
    } catch (error) {
        alert(error.message)
    }
})