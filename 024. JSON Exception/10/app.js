// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const str = 'mariku22yandex.ru';

function isValidStr(str) {
    try {
        if (!str.includes('@')) throw new Error('электронная почта введена не корректно')
        return true
    } catch (error) {
        return error.message
    }

}
const result = isValidStr(str);
console.log(result);

