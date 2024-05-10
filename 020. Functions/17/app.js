// 17. Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = 'hschool';


function changeStr(str) {
    const isValidStr = (str) =>(isNaN(str)) ? true : false;

    if (isValidStr(str) === true) {
        const nArr = [];
        str.split('').forEach((el, index) => {
            index % 2 === 0
                ? nArr.push(el.toUpperCase())
                : nArr.push(el.toLowerCase());
        });
        return nArr.join('');
    } else {
        return 'error'
    }
}
const res = changeStr(str)
console.log(res);


