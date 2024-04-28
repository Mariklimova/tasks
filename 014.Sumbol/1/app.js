// 1. Подается строка из нескольких слов. Необходимо добавить тире между словами


let str = 'kgmj dfgkkd fbdfb'.replaceAll(' ', '-');

console.log(str);

// 2
const str2 = 'kgmj dfgkkd fbdfb'.split(' ').join('-');

console.log(str2);