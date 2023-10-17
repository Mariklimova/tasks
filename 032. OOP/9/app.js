// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.

// class Validator {
//     url;
//     isURL() {
//         try {
//             if (!/^[a-z]{4,5}:\/\/[\w]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('url не допустим')
//             return true
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const validator = new Validator();
// validator.url = 'https://regex101.com'
// console.log(validator.isURL());



// class Validator {
//     url = 'https://regex101.com';
//     isURL() {
//         try {
//             if (!/^[a-z]{4,5}:\/\/[\w]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('url не допустим')
//             return true
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const validator = new Validator();
// console.log(validator.isURL());


// class Validator {

//     isURL(url) {
//         try {
//             if (!/^[a-z]{4,5}:\/\/[\w]+\.[a-z]{1,5}$/gm.test(url)) throw new Error('url не допустим')
//             return true
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const validator = new Validator();
// console.log(validator.isURL('https://regex101.com'));



class Validator {
    url;
    constructor(url) {
        this.url = url;
    }
    isURL() {
        try {
            if (!/^[a-z]{4,5}:\/\/[\w]+\.[a-z]{1,5}$/gm.test(this.url)) throw new Error('url не допустим')
            return true
        } catch (error) {
            return error.message
        }

    }
}
const validator = new Validator('https://regex101.com');
console.log(validator.isURL());

