
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
        const rep = this.repository(clientData);
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
        const check = data.filter(el =>el.email === clientData.email);
        if(check.length) throw new Error('already exists')
        data.push({ id: data.length + 1, ...clientData });
        return data;
    }
}


const client = new Client();
client.doRegistration();