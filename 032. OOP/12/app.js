// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

// 1
// class Hashtag {
//     n = prompt('Введите количество элементов массива');
//     isValid() {
//         if (!this.n) throw new Error('Вы не ввели значение');
//         if (isNaN(this.n)) throw new Error('Вы ввели не число');
//     }
//     doHashtag = () => {
//         try {
//             this.isValid();
//             const arr = [];
//             for (let i = 0; i < this.n; i++) {
//                 const element = prompt('Введите элемент массива')
//                 arr.push(`#${element}`)
//             }
//             return arr
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const hashtag = new Hashtag();
// console.log(hashtag.doHashtag());


// 2
// class Hashtag {
//     n;
//     isValid() {
//         if (!this.n) throw new Error('Вы не ввели значение');
//         if (isNaN(this.n)) throw new Error('Вы ввели не число');
//     }
//     doHashtag = () => {
//         try {
//             this.isValid();
//             const arr = [];
//             for (let i = 0; i < this.n; i++) {
//                 const element = prompt('Введите элемент массива')
//                 arr.push(`#${element}`)
//             }
//             return arr
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const hashtag = new Hashtag();
// hashtag.n = prompt('Введите количество элементов массива') 
// console.log(hashtag.doHashtag());


// 3
// class Hashtag {
//     isValid(n) {
//         if (!n) throw new Error('Вы не ввели значение');
//         if (isNaN(n)) throw new Error('Вы ввели не число');
//     }
//     doHashtag = (n) => {
//         try {
//             this.isValid(n);
//             const arr = [];
//             for (let i = 0; i < n; i++) {
//                 const element = prompt('Введите элемент массива')
//                 arr.push(`#${element}`)
//             }
//             return arr
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const hashtag = new Hashtag();
// const n = prompt('Введите количество элементов массива')
// console.log(hashtag.doHashtag(n));


// 4
class Hashtag {
    n;
    constructor(n) {
        this.n = n;
    }
    isValid() {
        if (!this.n) throw new Error('Вы не ввели значение');
        if (isNaN(this.n)) throw new Error('Вы ввели не число');
    }
    doHashtag = () => {
        try {
            this.isValid(n);
            const arr = [];
            for (let i = 0; i < this.n; i++) {
                const element = prompt('Введите элемент массива')
                arr.push(`#${element}`);
            }
            return arr
        } catch (error) {
            return error.message
        }
    }
}
const n = prompt('Введите количество элементов массива')
const hashtag = new Hashtag(n);
console.log(hashtag.doHashtag());