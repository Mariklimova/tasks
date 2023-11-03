// 7. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// [
// { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
// { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
// { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
// { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
// { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
// ]

class Client {
    constructor() {
        this.sendRequest()
    }
    sendRequest() {

        document.querySelector('button').addEventListener('click', () => {
            const mail = document.querySelector('.email');
            const pasw = document.querySelector('.password');
            const res = document.querySelector('p');
            const obj = { email: mail.value, pwd: pasw.value };
            const server = new Server()
            const resServer = server.controller(obj)
            res.innerHTML = JSON.stringify(resServer)
        })

    }
}

class Server {
    middleware(obj) {
        try {

            if (!obj.hasOwnProperty('email')) throw new Error('Invalid');
            if (!obj.hasOwnProperty('pwd')) throw new Error('Invalid');
            const res = this.controller(obj);
            return res
        } catch (error) {
            return error.message
        }
    }
    controller(obj) {

        const res = this.service(obj);
        return res
    }
    service(obj) {
        const res = this.repository(obj);
        return res
    }
    repository(obj) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ];
        const check = data.some(function (el) {
            if (el.email == obj.email) return true
        })
        if (check) throw new Error('такой email уже есть')
        data.push({ id: data.length + 1, ...obj });
        return data;
    }
}
const client = new Client();









