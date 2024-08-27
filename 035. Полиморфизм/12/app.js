// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true


class Number {
    constructor(num) {
        this.num = num;
    }
}
class PalindromeChecker extends Number {
    checkPolindrom = () => this.num.toString() == this.num.toString().split('').reverse().join('') ? true : false;
}

const palindromeChecker = new PalindromeChecker(12321);
console.log(palindromeChecker.checkPolindrom());














