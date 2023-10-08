// 11. *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 



const input = document.querySelector('input');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody')

button.addEventListener('click', () => {
    try {
        const tr = document.querySelector('tr');
        const td = document.querySelector('td');

        td.textContent = input.value;

        tr.appendChild(td);

        tbody.appendChild(tr);

        input.value = '';

    } catch (error) {
        alert(error.message)
    }
})