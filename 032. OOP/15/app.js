// 15. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

// [
//     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
//     ]


class ServerDelete {
    controller(json) {
        try {
            const serv = this.service(json);
            return serv;
        } catch (error) {
            return error.message
        }

    }
    service(json) {
        const repos = this.repository(json);
        return repos;
    }
    repository(json) {
        const arr = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]

        const data = arr.filter((el) => el.id !== json.id);
        if (data.length === arr.length) throw new Error('В базе данных не существует такое значение id')
        return data
    }
}

const serverDelete = new ServerDelete();
const json = JSON.parse(`{"id": "javascript"}`);
console.log(serverDelete.controller(json));