// 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.


// 1
// class Validator {
//     phone = '+375295644306';
//     isPhone = () => {
//         try {
//             if (!/^\+[\d]+$/gm.test(this.phone)) throw new Error('not valid phone')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator();
// console.log(validator.isPhone());


// 2
// class Validator {
//     phone;
//     isPhone = () => {
//         try {
//             if (!/^\+[\d]+$/gm.test(this.phone)) throw new Error('not valid phone')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator();
// validator.phone = '+375295644306';
// console.log(validator.isPhone());


// 3
// class Validator {

//     isPhone = (phone) => {
//         try {
//             if (!/^\+[\d]+$/gm.test(phone)) throw new Error('not valid phone')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator();
// console.log(validator.isPhone('+375295644306'));


// 4
class Validator {
    phone;
    constructor(phone) {
        this.phone = phone;
    }
    isPhone = () => {
        try {
            if (!/^\+[\d]+$/gm.test(this.phone)) throw new Error('not valid phone')
            return true
        } catch (error) {
            return error.message
        }
    }
}
const validator = new Validator('+375295644306');
console.log(validator.isPhone());