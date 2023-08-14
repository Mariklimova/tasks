// 17. На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest

// 1
// let str = 'anna_test_test'.split('_t').join('T');
// console.log(str);


// 2
let str = 'anna_test_test'.split('_');
for (i = 1; i < str.length; i++){
    // str2=str[i].toUpperCase();
    result = `${str[0]}${str[i][0].toUpperCase()}`;
}
console.log(result);