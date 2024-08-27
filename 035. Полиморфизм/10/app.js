// 3. Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"



class CommonPrefix {

    constructor(arr) {
        this.prefix_arr = arr;
    }

    findLongestPrefix = () => {
        const prefix = '';
        for (let i = 0; i < this.prefix_arr.length; i++) {
            const current_word = this.prefix_arr[i]
            for (let j = 1; j < this.prefix_arr.length; j++) {
if (current_word[j]) {
    
}
            }
        }
    }
}

const commonPrefix = new CommonPrefix(["flower", "flow", "flight"]);
console.log(commonPrefix.findLongestPrefix());





