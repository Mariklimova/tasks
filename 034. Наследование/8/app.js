// 4. Создайте класс StringRepository, который имеет статичный массив words. Наследуйте от него класс
// FilteredWords, добавив метод getWordsByLength(length), который возвращает только те слова,
// длина которых равна заданному значению.
// Входные:
// const repo = new FilteredWords(["apple", "banana", "kiwi", "plum"]);
// repo.getWordsByLength(5);
// → Результат: ["apple", "plum"]
// Входные:
// const repo = new FilteredWords(["cat", "dog", "elephant", "mouse"]);
// repo.getWordsByLength(3);
// → Результат: ["cat", "dog"]



class StringRepository {
    words = ["apple", "banana", "kiwi", "plum"]


}

class FilteredWords extends StringRepository {
    getWordsByLength = (length) => this.words.filter((el) => el.length == length)
}
const filteredWords = new FilteredWords();
console.log(filteredWords.getWordsByLength(5));