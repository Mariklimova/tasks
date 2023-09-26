// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const email = 'mariku22@yandex.ru'

function isValidEmail(email) {
    try {
        if (!/^[a-zA-Z0-9\_\-]+@[a-z]+\.[a-z]{1,5}$/gm.test(email)) throw new Error('not valid')
        return true
    } catch (error) {
        return error.message
    }
}
const res = isValidEmail(email);
console.log(res);
