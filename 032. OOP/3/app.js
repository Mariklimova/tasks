// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.


// 1
// class WordString {
//     str;
//     constructor(a) {
//         this.str = a;
//     }
//     reverseString = () => {
//         return this.str.split('').reverse().join('');

//     }
//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)

//     }
//     upperEvery = () => {
//         let newStr = [];
//         let str1 = this.str.split(' ')
//         for (let i = 0; i < str1.length; i++) {
//             newStr.push(str1[i][0].toUpperCase() + str1[i].slice(1))
//         }
//         return newStr.join(' ')
//     }
// }
// const wordstring = new WordString('hello, world');
// console.log(wordstring.reverseString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());



// 2
// class WordString {
//     str;
//     constructor(a) {
//         this.str = a;
//     }
//     reverseString = () => {
//         return this.str.split('').reverse().join('');

//     }
//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)

//     }
//     upperEvery = () => {
//         let newStr = [];
//         let str1 = this.str.split(' ')
//         return this.str.split(' ').map((el) => {
//             if (!el.length) return el
//             return el[0].toUpperCase() + el.slice(1)
//         }).join(' ')
//     }
// }
// const wordstring = new WordString('hello, world');
// console.log(wordstring.reverseString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());



// 3
class WordString {
    str;
    constructor(a) {
        this.str = a;
    }
    
    reverseString = () => this.str.split('').reverse().join('');

    upperFirst = () => this.str[0].toUpperCase() + this.str.slice(1);

    upperEvery = () => {
        let newStr = [];
        let str1 = this.str.split(' ')
        for (let i = 0; i < str1.length; i++) {
            newStr.push(str1[i][0].toUpperCase() + str1[i].slice(1))
        }
        return newStr.join(' ')
    }
}
const wordstring = new WordString('hello, world');
console.log(wordstring.reverseString());
console.log(wordstring.upperFirst());
console.log(wordstring.upperEvery());