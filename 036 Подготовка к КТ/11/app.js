// 11. Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку


class WordString {
    str;
    setStr(str) {
        this.str = str
    }
    getStr() {
        return this.str
    }
    ReverseString() {
        return this.str.split('').reverse().join('')

    }
}
const wordString = new WordString('stroka');
wordString.setStr('stroka')
console.log(wordString.ReverseString());
console.log(wordString.getStr());
