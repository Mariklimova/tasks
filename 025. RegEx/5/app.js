// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const str = 'https://regex101.com';

function isValidUrl(str) {
    try {
        if (!/^(http|https)\:\/\/[\w]+\.[a-z]{1,5}$/gm.test(str)) throw new Error ('not Valid')
        return true
    } catch (error) {
        return error.message
    }
}
let res = isValidUrl(str)
console.log(res);