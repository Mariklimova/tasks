// 15. Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
// multArr, которая заполняет и возвращает массив из 5 рандомных элементов. Класс
// ConsoleArray является производным по отношению к базовому, родительскому
// NumberArray и содержит функцию multArr. Необходимо переопределить multArr
// из базового класса записав в переменную используя метод super. Далее посчитать
// произведение всех элементов массива используя reduce


class NumberArray {
    multArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr
    }
}

class ConsoleArray extends NumberArray {
    multArr() {
        let arr = super.multArr();
        let result = arr.reduce(function (multyplay, el) {
            return multyplay * el;
        }, 1)
        return result
    }
}
const consoleArray = new ConsoleArray();
console.log(consoleArray.multArr());



