const express = require('express');
const { getAllData, getId, updateDatabyTd, deleteElementById, createEntryById } = require('./service.js')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        const data = getAllData();
        res.status(200).send(data)

    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const get = getId(id)
        res.status(200).send(get)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const update = updateDatabyTd(id, label, category, priority);
        res.status(200).send(update);

    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const delElement = deleteElementById(id);
        res.status(200).send(delElement);

    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const entry = createEntryById(label, category, priority)
        res.send(entry);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.listen(3000, () => {
    console.log('server is run');
})





// GET “/” – получние всех элементов массива
// • GET “/:id” – получение отдельного элемента по id
// • POST “/” – с клиента приходит объект вида {"label": "TypeScript", "category":
// "programmingLanguages", "priority": 1 }. Добавить в массив объект в том случае, если
// совпадений label.toLowerCase() с id массива нет. Вернуть клиенту массив и статус
// • PUT “/:id” – обновить в массиве объект только в том случае, если есть совпадения с
// id. Вернуть клиенту массив и статус
// • DELETE “/:id” удалить из массива объект только в том случае, если id совпадает.
// Вернуть клиенту массив и статус