// 14. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
    name;
    surname;
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
}
class Customer extends Person {
    phonenumber;
    setPhoneNumber(phonenumber) {
        this.phonenumber = phonenumber;
    }
    getPhonenumber() {
        return this.phonenumber;
    }
}
const customer = new Customer();
customer.setName('Agata');
customer.setSurname('Klimova');
customer.setPhoneNumber('+37585562522')
console.log(customer.getName());
console.log(customer.getSurname());
console.log(customer.getPhonenumber());