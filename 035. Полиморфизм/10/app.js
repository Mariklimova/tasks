// 3. Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"


// 1
class CommonPrefix {

    constructor(arr) {
        this.arr = arr;
    }

    findLongestPrefix = () => {
        let prefix = '';
        const minWordLength = Math.min(...this.arr.map((el) => el.length));
        for (let i = 0; i < minWordLength; i++) {
            const letter = this.arr[0][i];
            const result = this.arr.every((item) => item[i]);
            if (!this.arr.every((item) => item[i]=== letter)) break
            prefix += letter;

        }
        return prefix
    }
}

const commonPrefix = new CommonPrefix(["interview", "interval", "internet"]);
console.log(commonPrefix.findLongestPrefix());


// 2
// class CommonPrefix {

//     constructor(arr) {
//         this.arr = arr;
//     }

//     findLongestPrefix = () => {
//         let prefix = '';
//         let letter = 0;
//         let found = true;
//         while (found) {
//             for (let i = 0; i < this.arr.length - 1; i++) {
//                 if (letter >= this.arr[i].length || letter>=this.arr[i + 1].length || this.arr[i][letter] !== this.arr[i + 1][letter]) {
//                     found = false;
//                     break
//                 }
//             }

//             if (found) {
//                 prefix += this.arr[0][letter]
//                 letter++
//             }
//         }
//         return prefix
//     }
// }

// const commonPrefix = new CommonPrefix(["interview", "interval", "internet"]);
// console.log(commonPrefix.findLongestPrefix());













