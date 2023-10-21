// 3. Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer


class Worker {
    name;
    surname;
    getFulName() {
        return `${this.name} ${this.surname}`
    }
    setName(name) {
        this.name = name
    }
    setSurName(surname) {
        this.surname = surname
    }
    getName() {
        return this.name
    }
    getSurName() {
        return this.surname
    }
}
class Singer extends Worker {
    years;
    birth;
    style;
    setYears(years) {
        this.years = years
    }
    setBirth(birth) {
        this.birth = birth
    }
    setStyle(style) {
        this.style = style
    }
    getYears() {
        return this.years
    }
    getBirth() {
        return this.birth
    }
    getStyle() {
        return this.style
    }

    getMoreInfo() {
        return `${this.getFulName()} ${this.years} ${this.birth} ${this.style}`
    }

}
const singer = new Singer()
singer.setName('Andrey')
singer.setSurName('Klimov')
singer.setYears('30')
singer.setBirth('11.11.2011')
singer.setStyle('hghijo')

console.log(singer.getFulName());
console.log(singer.getMoreInfo());