// На вход программе подаётся строка. Замените все @ на '!' (2 способа)



// 1
let str = prompt().trim();
console.log(str.replaceAll('@', '!'));

// 2
console.log(str.split('@').join('!'));
