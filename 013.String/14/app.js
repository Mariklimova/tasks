// 14. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false


let url = prompt('введите url-адрес');

if (isNaN(url)) {
    if (url.indexOf('http') === 0 && url.includes('/') && url.lastIndexOf('.com') === url.length - 4
        || url.lastIndexOf('.ru') === url.length - 3) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('error');
}

// 2
if (isNaN(url)) console.log(url.indexOf('http') === 0 && url.includes('/')
    && url.lastIndexOf('.com') === url.length - 4
    || url.lastIndexOf('.ru') === url.length - 3) ? true : false;
else console.log('error');
