// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

// 1
// class Validator {
//     mail = 'mariku22@yandex.ru';
//     isEmail() {
//         try {
//             if (!/^[\w\-\/\]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.mail)) throw new Error('email is not entered correctly')
//             return true;
//         } catch (error) {
//             return error.message
//         }
//     }

// }
// const validator = new Validator();
// console.log(validator.isEmail());


// 2
// class Validator {
//     mail;
//     isEmail() {
//         try {
//             if (!/^[\w\-\/\]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.mail)) throw new Error('email is not entered correctly')
//             return true;
//         } catch (error) {
//             return error.message
//         }
//     }

// }
// const validator = new Validator();
// validator.mail = 'mariku22@yandex.ru';
// console.log(validator.isEmail());


// 3
// class Validator {
//     isEmail(mail) {
//         try {
//             if (!/^[\w\-\/\]+\@[a-z]+\.[a-z]{1,5}$/gm.test(mail)) throw new Error('email is not entered correctly')
//             return true;
//         } catch (error) {
//             return error.message
//         }
//     }

// }
// const validator = new Validator();
// console.log(validator.isEmail('mariku22@yandex.ru'));


// 4
class Validator {
    email;
    constructor(mail) {
        this.email = mail;
    }
    isEmail() {
        try {
            if (!/^[\w\-\/\]+\@[a-z]+\.[a-z]{1,5}$/gm.test(this.mail)) throw new Error('email is not entered correctly')
            return true;
        } catch (error) {
            return error.message
        }
    }

}
const validator = new Validator();
validator.mail = 'mariku22@yandex.ru';
console.log(validator.isEmail());
