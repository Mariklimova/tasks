// 6. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)

const p = document.querySelector('p')

const n = Math.round(Math.random() * 10);

function getObject(n) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.round(Math.random() * 10);
    }
    return obj;
}
const res = getObject(n)
p.innerHTML = `Result: ${JSON.stringify(res)}`;
