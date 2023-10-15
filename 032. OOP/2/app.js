// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод



// 1
// class Calculator {
//     a = 10;
//     b = 5;
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }
//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }
//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }
//     getDivide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.getSum());
// console.log(calculator.getMinus());
// console.log(calculator.getMultiply());
// console.log(calculator.getDivide());



// 2
// class Calculator {
//     a;
//     b;
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }
//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }
//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }
//     getDivide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }
// const calculator = new Calculator();
// calculator.a = 20;
// calculator.b = 10;

// console.log(calculator.getSum());
// console.log(calculator.getMinus());
// console.log(calculator.getMultiply());
// console.log(calculator.getDivide());



// 3
// class Calculator {

//     getSum = (a,b) => {
//         const res = a + b
//         return res
//     }
//     getMinus = (a,b) => {
//         const res1 = a - b
//         return res1
//     }
//     getMuilyply = (a,b) => {
//         const res2 = a * b
//         return res2
//     }
//     getDivide = (a,b) => {
//         const res3 = a / b
//         return res3
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.getSum(5,2));
// console.log(calculator.getMinus(6,9));
// console.log(calculator.getMuilyply(43,4));
// console.log(calculator.getDivide(6,3));


// 4
class Calculator {
    MyA;
    MyB;
    constructor(a, b) {
        this.MyA = a;
        this.MyB = b;
    }
    getSum = () => {
        const res = this.a + this.b
        return res
    }
    getMinus = () => {
        const res1 = this.a - this.b
        return res1
    }
    getMultiply = () => {
        const res2 = this.a * this.b
        return res2
    }
    getDivide = () => {
        const res3 = this.a / this.b
        return res3
    }
}
const calculator = new Calculator();
calculator.a = 20;
calculator.b = 10;

console.log(calculator.getSum());
console.log(calculator.getMinus());
console.log(calculator.getMultiply());
console.log(calculator.getDivide());



