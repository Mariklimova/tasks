// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”



// 1
// class Singer {
//     name = 'Agata';
//     surname = 'Klimova';
//     getAutograph=()=> {
//         return `${this.name} ${this.surname}`
//     }
// }
// const singer = new Singer();
// console.log(singer.getAutograph());

// 2
// class Singer {
//     name;
//     surname;
//     getAutograph = () => {
//         return `${this.name} ${this.surname}`
//     }

// }
// const singer = new Singer();
// singer.name = 'Agata';
// singer.surname = 'Klimova';
// console.log(singer.getAutograph());

// 3
// class Singer {

//     name;
//     surname;
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getAutograph = () => {
//         return `${this.name} ${this.surname}`
//     }

// }
// const singer = new Singer('Agata', 'Klimova');
// console.log(singer.getAutograph());

// 4
class Singer {

    getAutograph = (name,surname) => {
        return `${name} ${surname}`
    }

}
const singer = new Singer();
console.log(singer.getAutograph('Agata', 'Klimova'));