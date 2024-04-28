// 16. На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany


let str = 'hSСhOol СomPAnY';
// 1
console.log('#' + str.toLowerCase().split(' ').join(''));

// 2
console.log('#' + str.toLowerCase().replaceAll(' ', ''));

// 3
console.log(`${'#'}${str.toLowerCase().replaceAll(' ', '')}`);

// 4
if (isNaN(str)) {
    console.log(`${'#'}${str.toLowerCase().replaceAll(' ', '')}`);
} else {
    console.log('error');
}


// 5
if (isNaN(str)) console.log(`${'#'}${str.toLowerCase().replaceAll(' ', '')}`);
else console.log('error');


// 6
isNaN(str) ? console.log(`${'#'}${str.toLowerCase().replaceAll(' ', '')}`): console.log('error');

// 7
console.log(isNaN(str) ? `${'#'}${str.toLowerCase().replaceAll(' ', '')}`: 'error');