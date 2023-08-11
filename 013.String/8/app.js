// 8. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'



// ответ bbb
let str = 'aaa bbb ccc'
console.log(str.slice(4, 7));


// ответ ccc
let str2 = str.slice(0, 4);
let str3 = str.slice(8);
console.log(`${str2} ${str3}`);