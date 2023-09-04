// 10. На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
// объект соответствующими данными. Добавить проверки на ввод


const obj = {
    name: null,
    age: null,
    birthday: null
}
for (const key in obj) {
    if (!obj[key]) {
        obj.name = 'Agata';
        obj.age = 10;
        obj.birthday = 11.12;
    }
}
console.log(obj);

