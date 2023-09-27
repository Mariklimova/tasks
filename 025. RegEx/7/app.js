// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = 'Agata111213';

function checkPas(password) {
    try {
        if (!/^[\w\~\!\@\#\$\%\^\&\*\_\-\+\=\\\<\>\.\/]+$/gm.test(password)) throw new Error('the password is not secure');
        if (password.length < 8) throw new Error('the password is not secure')
        return true
    } catch (error) {
        return error.message
    }
}
const res = checkPas(password)
console.log(res);
