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
    setA(h) {
        this.h = h;
    }
}
class Circle extends Figure {
    name = 'circle';
    square;
    setSquare() {
        this.square = this.p * (this.r ** 2)
    }
    
}
class Triangle extends Figure {
    name = 'triangle';
    triangle;
    setSquare() {
        this.square = this.p * (this.r ** 2)
    }
}
class Square extends Figure {
    name = 'Square';
    square;
    setSquare() {
        return `${this.name}${this.square}`
    }
}
const circle = new Circle();
circle.setR(5);

const triangle = new Triangle();
triangle