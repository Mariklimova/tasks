// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.

// class Validator {
//     date;
//     constructor(date) {
//         this.date = date;
//     }
//     isDate = () => {
//         try {
//             if (!/^[0-3][\d]\.[0-1][\d]\.[1-2][\d][\d][\d]$/gm.test(this.date)) throw new Error('not valid data')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator('11.12.2013')
// console.log(validator.isDate());



// 2
// class Validator {
   
//     isDate = (date) => {
//         try {
//             if (!/^[0-3][\d]\.[0-1][\d]\.[1-2][\d][\d][\d]$/gm.test(date)) throw new Error('not valid data')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator();
// console.log(validator.isDate('11.12.2013'));



// 3
// class Validator {
//    date;
//     isDate = () => {
//         try {
//             if (!/^[0-3][\d]\.[0-1][\d]\.[1-2][\d][\d][\d]$/gm.test(this.date)) throw new Error('not valid data')
//             return true
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator();
// validator.date = '11.12.2013';
// console.log(validator.isDate());


// 4
class Validator {
    date = '11.12.2013';
     isDate = () => {
         try {
             if (!/^[0-3][\d]\.[0-1][\d]\.[1-2][\d][\d][\d]$/gm.test(this.date)) throw new Error('not valid data')
             return true
         } catch (error) {
             return error.message
         }
     }
 }
 const validator = new Validator();
 console.log(validator.isDate());
