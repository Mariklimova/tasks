// 6. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}


class Client {
    sendRequest() {
        document.querySelector('button').addEventListener('click', () => {
            const mail = document.querySelector('.email');
            const pasw = document.querySelector('.password');
            const res = document.querySelector('p');
            const obj = {};
            obj.email = mail.value;
            obj.pwd = pasw.value;
            res.innerHTML = JSON.stringify(obj)
            mail.value = '';
            pasw.value = '';
        })
    }
}
const client = new Client();
client.sendRequest()