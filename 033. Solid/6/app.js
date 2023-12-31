// 6. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPut {
    middleware(json) {
        try {
            if (!json.hasOwnProperty('id')) throw new Error('Invalid');
            if (json.id < 0) throw new Error('Id<0');
            const res = this.controller(json);
            return res

        } catch (error) {
            return error.message
        }
    }
    controller(json) {
        const res = this.service(json);
        return res
    }
    service(json) {
        const res = this.repository(json);
        return res
    }
    repository(json) {
        const data = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ];
        const res = data.map((el, index) => {
            if (el.id == json.id) return json;
            else return el;
        })
        return res
    }
}
const serverPut = new ServerPut();
const json = JSON.parse(`{"id": 1, "name": "Test", "age": 1}`)
console.log(serverPut.middleware(json));


