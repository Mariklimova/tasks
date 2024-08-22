// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
// position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
// Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
// Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
// Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000


class Person {
    name;
}

class Employee extends Person {
        position;
        monthly_salary;

    getAnnualSalary() {
        return `Результат: ${this.name}, ${this.position}, ${this.monthly_salary * 12}`;
    }
}

const employee = new Employee();
employee.name = "Alice";
employee.position = "Developer";
employee.monthly_salary = 5000;

console.log(employee.getAnnualSalary());