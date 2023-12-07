const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const { show, showById, createUser, deleteUser, update } = require('./service');

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const result = show()
    res.send(result)
})


app.get('/:id', (req, res) => {
    const { id } = req.params;
    const int = showById(id)
    res.send(int)
})

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    const user = createUser(name, age)
    res.send(user)
})


app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const del = deleteUser(id);
    res.send(del)
})


app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const updateUser = update(id,name,age)
    res.send(updateUser)
})

app.listen(3000, () => console.log('server run'))





// 6. Добавить 1 обработчик маршрута: get с url “/:id”. На сервере есть файл сервисов. В
// нем глобально хранится массив объектов. Прописать логику так, чтобы при get
// запросе отправлялся ответ клиенту с объектом, id которого совпадает с
// запрашиваемым id, статус ответа
// 7. Для post запроса добавить добавление тела запроса в массив и возвращать
// обновленный массив, статус ответа
// 8. Добавить 2 обработчика маршрута: put, delete
// 9. Для put с url “/:id” запроса добавить обновление массива по id и возвращать
// обновленный массив, статус ответа


// 10. Для delete с url “/:id” удалять по id элемент массива