// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const info = 'Marina Klimova 18';

function isValidInfo(info) {
    try {
        if (!/^[A-z][a-z]+\ [A-Z][a-z]+\ [1-9]{1,2}$/gm.test(info)) throw new Error('not valid')
        return true
    } catch (error) {
        return error.message
    }
}
const res = isValidInfo(info)
console.log(res);
