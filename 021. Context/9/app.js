// 7. Необходимо реализовать конкатенацию строк при каждом последующем вызове
// функции с использованием замыкания

function concatStr() {
    let str = '';
    return (function (a) {
        str += a + ' '
        console.log(str);
    })

}
const res = concatStr()
res('Я');
res('учусь');
res('в');
res('HSchool');


