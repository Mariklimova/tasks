// 1. Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer


class Worker {
    name_;
    surname;
    constructor(name_, surname) {
        this.name_ = name_;
        this.surname = surname;
    }
    getInfo() {
        console.log(`${this.name_} ${this.surname}`);
    }

}
class Singer extends Worker {
    years;
    birth;
    style;
    constructor(name_, surname, years, birth, style) {
        super(name_, surname)
        this.years = years;
        this.birth = birth;
        this.style = style;
    }
    getInfo() {
        super.getInfo()
        console.log(`${this.years} ${this.birth} ${this.style}`);
    }
}
const worker = new Worker('Agata', 'Klimova')
const singer = new Singer('Agata', 'Klimova', '2013', '11', 'casual');
singer.getInfo()
console.log('----------');
worker.getInfo()
