// 3. Напишите функцию, которая принимает адрес электронной почты и возвращает
// объект с полями email и active. Поле active должно быть true, если адрес содержит
// символ '@' и '.com’ / ‘.by', и false в противном случае.
// {
// email,
// active: true / false
// }

const email = 'mariku22@mail.by';

function getEmail(email) {
    // return {email:email, active:email.includes('@')&&(email.includes('com'))||email.includes('by')? true:false}
    if (email.includes('@') && (email.includes('by') || email.includes('com'))) {
        return {
            email: email,
            active: true
        }
    } else {
        return {
            email: email,
            active: false
        }
    }

}
let result = getEmail(email);
console.log(result);