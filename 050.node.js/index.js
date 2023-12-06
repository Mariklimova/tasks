const express = require('express')
const app = express();

app.get('/', (req, res) => {
    const arr = [1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5]
    const uniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniq.includes(arr[i])) uniq.push(arr[i])
    }
    res.send(uniq);
})
app.get('/about', (req, res) => {
    const mail = 'mariku22@yandex.ru';
    if (/^[\w]+\@[a-z]+\.[a-z]{1,6}/gm.test(mail)) res.send(true)
})
app.get('/contact', (req, res) => {
    res.send('contact')
})

// 7
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const arr = [1, 2, 3, 4, 5, 6];
    const resArr = [];
    let itemArr = [];
    for (let i = 0; i < arr.length; i++) {
        itemArr.push(arr[i]);
        if (itemArr.length == id) {
            resArr.push(itemArr);
            itemArr = [];
        }
    }
    res.send(resArr);
})

app.get('/task/:id', (req, res) => {
    const arr = [
        { "id": 1, "name": "Yesenia", "age": 22 },
        { "id": 2, "name": "Hanna", "age": 22 },
        { "id": 3, "name": "Stanislau", "age": 25 },
        { "id": 4, "name": "German", "age": 18 },
        { "id": 5, "name": "Maria", "age": 27 }
    ]
    const result = arr.filter((el)=>el.id==id);
    res.send(result)
})

app.listen(3000, () => {
    console.log('Server is running');
})














// 1. Установить пакет npm
// 2. Поставить сервер
// 3. Добавить 3 обработчика маршрута get с url: "/ “, "/about“, "/contact"
// 4. Отправить клиенту ответы по каждому из маршутов
// 5. Изменить функционал роута get “/”. На сервере хранится массив из чисел.
// Необходимо вернуть клиенту только уникальные значения

// 6. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и
// отправить клиенту. (Для того чтобы получить значение из url необходимо
// воспользоваться деструктуризацией из request.params)

// 7. Создать обработчик маршрута get с url: "/:id“. Необходимо получить значение id. На
// сервере хранится массив из чисел. Напишите функцию, которая разделяет массив
// на части заданного размера. Необходимо вернуть клиенту массив
// 8. Создать обработчик маршрута get с url: "/task/:id “. Необходимо получить значение
// id. На сервере хранится массив объектов, в каждом из которых есть поле id int.
// Напишите функцию, которая находит по id объект. Необходимо вернуть клиенту
// объект (Вспомнить ServerGetById)