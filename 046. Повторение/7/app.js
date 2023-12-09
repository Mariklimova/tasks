// 7. Допишите функционал регистрации. Небезопасно хранить в БД пароль в
// пользовательском виде. Необходимо написать алгоритм шифрования с помощью
// шифра Цезаря.
// Задание: На сервер подается объект с ключом pwd, как и сделано в предыдущем
// задании. Пароль – строка текста на английском языке, в которой нужно
// зашифровать все слова. Каждое слово строки следует зашифровать с помощью
// шифра Цезаря (циклического сдвига на длину этого слова). Буквы верхнего и
// нижнего регистров при этом не изменяют свой первоначальный регистр


class Client {
    doRegistration() {
        const mail = document.querySelector('.email')
        const pwd = document.querySelector('.pwd')
        const btn = document.querySelector('button')

        btn.addEventListener('click', () => {
            let clientData = ({ email: mail.value, pwd: pwd.value });
            const server = new Server()
            const count = server.controller(clientData);
            console.log(count);
            mail.value = '';
            pwd.value = '';
        })
    }

}



class Server {
    controller(clientData) {
        try {
            const serv = this.service(clientData);
            return serv

        } catch (error) {
            return error.message
        }
    }
    service(clientData) {

        const step = 3;
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const oldPwdClient = clientData.pwd;
        const hashPwd = [];

        for (let i = 0; i < oldPwdClient.length; i++) {
            let include = alphabet.includes(oldPwdClient[i].toLowerCase());
            if (include) {
                let position = alphabet.indexOf(oldPwdClient[i].toLowerCase());
                if ((position + step) >= alphabet.length) {
                    let sum = position + step - alphabet.length;
                    hashPwd.push(alphabet[sum])
                } else {
                    hashPwd.push(alphabet[position + step]);
                }
            }
        }



        const rep = this.repository({ ...clientData, pwd: hashPwd.join('') });
        return rep
    }
    repository(clientData) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];
        const check = data.filter(el => el.email === clientData.email);
        if (check.length) throw new Error('already exists')
        data.push({ id: data.length + 1, ...clientData });
        return data;
    }
}


const client = new Client();
client.doRegistration();



