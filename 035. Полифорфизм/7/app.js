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


class Server {
    middleware(json) {
        try {
            if (!json.hasOwnProperty('email')) throw new Error('Invalid');
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
    repository() {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ];
        const btn = document.querySelector('button');
        btn.addEventListener("click", () => {
            try {
                const json = JSON.parse(document.querySelector("p").textContent);
                if (json.email == "" || json.pwd == "") throw new Error("Вы не можeте добавить в базу данных пустой обьект");

                const check = data.some(function (el) {
                    if (el.email == json.email) return true
                })
                if (check) throw new Error('такой email уже есть')
                data.push({ id: data.length + 1, ...json });
                return data;
            } catch (error) {
                return error.message;
            }
        })
        // const check = data.some(function (el) {
        //     if (el.email == json.email) return true
        // })
        // if (check) throw new Error('такой email уже есть')
        // data.push({ id: data.length + 1, ...json });
        // return data;
    }
}
const server = new Server();
// const json = JSON.parse(`{"email": "mariku22@yandex.ru", "pwd": "Agata111213"}`)
console.log(server.middleware());








// document.querySelector('button').addEventListener("click", () => {
//     try {
//         const json = JSON.parse(document.querySelector("p").textContent);
//         if (json.email == "" || json.pwd == "") throw new Error("Вы не можeте добавить в базу данных пустой обьект");

//         const check = data.some(function (el) {
//             if (el.email == json.email) return true
//         })
//         if (check) throw new Error('такой email уже есть')
//         data.push({ id: data.length + 1, ...json });
//         return data;
//     } catch (error) {
//         alert(error.message);
//     }
// })