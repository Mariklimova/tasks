// 11. Напишите функцию, генерирующую пароль из 8 символов с использованием
// замыкния. (Math.random)


function getPassword() {
    let pwd = '';
    return function () {
        pwd += Math.round(Math.random() * 9)
        console.log(pwd);
    }
}
let res = getPassword()
res()
res()
res()
res()
res()
res()
res()
res()