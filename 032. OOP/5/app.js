// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод


// 1
// class Anagram {
//     word_1 = 'сосна';
//     word_2 = 'насос';
//     isValid() {
//         if (!isNaN(this.word_1 && this.word_2)) throw new Error('not a string')
//     }
//     checkAnagram = () => {
//         try {
//             this.isValid();
//             if (this.word_1.split('').sort().join('') === this.word_2.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const anagram = new Anagram();
// console.log(anagram.checkAnagram());


// 2
// class Anagram {
//     word_1;
//     word_2;

//     isValid() {
//         if (!isNaN(this.word_1 && this.word_2)) throw new Error('not a string')
//     }

//     checkAnagram = () => {
//         try {
//             this.isValid();
//             if (this.word_1.split('').sort().join('') === this.word_2.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const anagram = new Anagram();
// anagram.word_1 = 'сосна';
// anagram.word_2 = 'насос';
// console.log(anagram.checkAnagram());


// 3
class Anagram {
    isValid(word_1, word_2) {
        if (!isNaN(word_1 && word_2)) throw new Error('not a string')
    }

    checkAnagram = (word_1, word_2) => {
        try {
            this.isValid(word_1, word_2);
            if (word_1.split('').sort().join('') === word_2.split('').sort().join('')) return true
            else return false
        } catch (error) {
            return error.message
        }

    }
}
const anagram = new Anagram();
console.log(anagram.checkAnagram('сосна', 'насос'));


// 4
// class Anagram {
//     word_1;
//     word_2;
//     constructor(str1, str2) {
//         this.word_1 = str1;
//         this.word_2 = str2;
//     }
//     isValid() {
//         if (!isNaN(this.str1 && this.str2)) throw new Error('not a string')
//     }
//     checkAnagram = () => {
//         try {
//             this.isValid();
//             if (this.str1.split('').sort().join('') === this.str2.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             return error.message
//         }

//     }
// }
// const anagram = new Anagram();
// anagram.str1 = 'сосна';
// anagram.str2 = 'насос';
// console.log(anagram.checkAnagram());