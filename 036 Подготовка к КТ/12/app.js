// 12. Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail


class Validator {
    setEmail(mail) {
        this.mail = mail;
    }
    getEmail() {
        return this.mail
    }
    isEmail() {
        if (/^[\w]+\@[a-z]+\.[a-z]{1,5}/gm.test(this.mail)) {
            return true
        } else {
            return false
        }
    }
}
const validator = new Validator()
validator.mail = 'mariku22@yandex.ru';
console.log(validator.isEmail());