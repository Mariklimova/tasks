// 3. У вас есть объект с информацией о пользователе. Извлеките имя и возраст
// пользователя с использованием деструктуризации.

const obj = {
    id: 1,
    name_: 'Agata',
    age: 9,
    role: 'student'
}
const { name_, age } = obj;
console.log(name_);
console.log(age);