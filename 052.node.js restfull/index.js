const express = require('express');
const { getAllData, getId, updateDatabyTd, deleteElementById } = require('./service.js')
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

app.listen(3000, () => {
    console.log('server is run');
})