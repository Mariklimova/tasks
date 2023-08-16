// 17. На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest



// 1
let str = 'anna_test_test'.split('_');
let result = str[0];

for (i = 1; i < str.length; i++){
    result+=str[i][0].toUpperCase() + str[i].slice(1);
}
console.log(result);
