// 4. Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади


class Figure {
    pi = 3.14;
    r;
    a;
    h;
    setR(r) {
        this.r = r;
    }
    setA(a) {
        this.a = a;
    }
    setH(h) {
        this.h = h;
    }
}
class Circle extends Figure {
    name = 'circle';
    square;
    setSquare() {
        this.square = this.pi * this.r ** 2;
    }
    getSquare() {
        return `${this.name} - ${this.square}`
    }

}
class Triangle extends Figure {
    name = 'triangle';
    square;
    setSquare() {
        this.square = 0.5 * this.a * this.h;
    }
    getSquare() {
        return `${this.name} - ${this.square}`
    }

}
class Rectangle extends Figure {
    name = 'rectangle';
    square;
    setSquare() {
        this.square = this.h * this.h;
    }
    getSquare() {
        return `${this.name} - ${this.square}`
    }
}
const circle = new Circle();
circle.setR(5);
circle.setSquare()

const triangle = new Triangle();
triangle.setA(5);
triangle.setH(7);
triangle.setSquare()

const rectangle = new Rectangle();
rectangle.setH(5);
rectangle.setSquare();

console.log(circle.getSquare());
console.log(triangle.getSquare());
console.log(rectangle.getSquare());