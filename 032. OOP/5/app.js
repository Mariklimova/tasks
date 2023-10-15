// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
    word_1 = 'сосна'.split('');
    word_2 = 'насос'.split('');
    checkAnagram = () => {
        if (this.word_1.includes(this.word_2)) {
            return true
        } else {
            return false
        }

    }
}