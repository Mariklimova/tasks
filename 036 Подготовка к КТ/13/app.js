// 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах. 


class Calculator {
    num;
    doSqrt() {
        return Math.sqrt(this.num);
    }
}
const calculator = new Calculator();
calculator.num = 256;
console.log(calculator.doSqrt());
