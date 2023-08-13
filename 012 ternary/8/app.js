// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)


let month = 13
// 1
if (!isNaN(month)) {
    if (month > 1 && month < 12) {
        console.log('некорректный ввод');
    } else if (month >= 3 && month <= 5) {
        console.log('весна');
    } else if (month >= 6 && month <= 8) {
        console.log('лето');
    } else if (month >= 9 && month <= 11) {
        console.log('осень');
    } else {
        console.log('зима');
    } 
}else{
    console.log('вы ввели букву');
  }  

// 2
// switch (month) {
//     case 3 || 4 || 5:
//         console.log('весна');
//         break;

//     default:
//         break;
// }