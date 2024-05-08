const database = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
]


const data = { "label": "Test", "category": "test", "priority": 1 }

// 1
// const res = database.filter(function (elem) {
//     if (elem.label === data.label) {
//         return true
//     }
// })

// if (res.length === 0) {
//     database.push(data)
//     console.log(database);
// } else {
//     console.log('Вы не можете созать lebel, так как он уже существует');
// }


// 2
const res = database.filter((elem)=> {
    if (elem.label === data.label) return true
})

if (res.length === 0) {
    database.push(data)
    console.log(database);
} else {
    console.log('Вы не можете созать lebel, так как он уже существует');
}