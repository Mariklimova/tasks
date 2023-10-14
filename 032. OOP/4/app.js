// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод


class MathСalculation {
    n;
    arr = [];
    constructor(n) {
        this.n = n;
    }
    pushArr = () => {
        for (let i = 0; i < this.n; i++) {
            this.arr.push(i)
        }
        return this.arr
    }
    getSumArr = () => {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % 2 == 0) sum += this.arr[i]
        }
        return sum;
    }
}
const mathcalculation = new MathСalculation(5);
console.log(mathcalculation.pushArr(), mathcalculation.getSumArr());