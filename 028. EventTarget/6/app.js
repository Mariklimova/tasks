// 6. Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.

const name = document.querySelector('.name');
const psw = document.querySelector('.psw');
const mail = document.querySelector('.mail');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    try {
        if (!name.value || !psw.value || !mail.value) throw new Error('input is empty');
        if (!/^[\w]+@[a-z]+\.[a-z]{1,5}$/gm.test(mail.value)) throw new Error('mail is not valid');
        if (!/^[\w]{8,}$/gm.test(psw.value)) throw new Error('psw is not valid');
        if (!isNaN(name.value)) throw new Error('name is not valid');
        alert('Вы успешно зарегестрировались')
    } catch (error) {
        console.log(error.message);
    }
})