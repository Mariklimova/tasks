const database = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
]



const data = { "id": "test", "label": "Test", "category": "test", "priority": 1 }


const res = database.filter(function (elem) {
    if (elem.id === data.id) {
        return true
    }
})

if (res.length === 0) {
    database.push(data)
    console.log(database);
} else {
    console.log('такая учетная запись уже существует');
}


let res2 = database.filter(function (el) {
    if (el.id !== data.id) {
        return true
    }
})
console.log(res2);

const newdata = { "id": "test", "label": "Test2023", "category": "newtest", "priority": 2 }
res2.push(newdata)
console.log(res2);


