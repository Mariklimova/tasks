// 4. ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"


let str = 'HTML JavaScript PHP'

// 1
console.log(str.split(' ').join('-').toUpperCase());

// 2
console.log(str.toUpperCase().replaceAll(' ', '-'));

