// 8. Создайте класс Vehicle с атрибутом speed. На основе этого класса создайте класс Car, добавив
// атрибут brand и метод getInfo(), который выводит информацию о машине в формате "Brand:
// <brand>, Speed: <speed>".
// Входные: Car("Toyota", 120).getInfo() → Результат: "Brand: Toyota, Speed: 120"
// Входные: Car("Ford", 150).getInfo() → Результат: "Brand: Ford, Speed: 150"
// Входные: Car("BMW", 180).getInfo() → Результат: "Brand: BMW, Speed: 180«


class Vehicle {
    speed;

}

class Car extends Vehicle {
    brand;

    getInfo = () => `Brand: ${this.brand}, Speed: ${this.speed}`
}
const car = new Car();
car.speed = 180
car.brand = 'BMW';
console.log(car.getInfo());