// 14. На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

const str = 'mariku22@yandex.com'

// 1
if (str.includes('@') && str.lastIndexOf('.ru') == str.length - 3 || str.lastIndexOf('.com') == str.length - 4) {
    console.log(true);
} else {
    console.log(false);
}

// 2
if (str.includes('@') && str.lastIndexOf('.ru') == str.length - 3 || str.lastIndexOf('.com') == str.length - 4) console.log(true);
else console.log(false);
