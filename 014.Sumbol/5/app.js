// 5. На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/


let url =  'https://www.instagram.com/hschool.official/';

// 1
console.log(url.slice(8));

// 2
console.log(url.slice(url.indexOf('w')));


