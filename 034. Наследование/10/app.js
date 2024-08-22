// 6. Создайте класс SentenceRepository, который имеет массив строк sentences и метод getSentences(),
// возвращающий этот массив. Наследуйте от него класс LongestSentence, добавив метод
// getLongestSentence(), который возвращает самую длинную строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: "JavaScript is fun"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"


class SentenceRepository {
    constructor(arr) {
        this.arr = arr;
    }

}

class LongestSentence extends SentenceRepository {
    getLongestSentence = () => {
        let bigString = '';

        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].length > bigString.length ? bigString = this.arr[i] : null;
        }
        return bigString
    }
}
const longestSentence = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
console.log(longestSentence.getLongestSentence());