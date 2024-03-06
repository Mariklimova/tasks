// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)


let month = 12;
// 1
// if (!isNaN(month)) {
//     if (month > 0 && month < 13) {
//         if (month >= 3 && month <= 5) {
//             console.log('весна');
//         } else if (month >= 6 && month <= 8) {
//             console.log('лето');
//         } else if (month >= 9 && month <= 11) {
//             console.log('осень');
//         } else {
//             console.log('зима');
//         }
//     } else {
//         console.log('некорректный ввод');
//     }
// } else {
//     console.log('вы ввели букву');
// }


// 2
if (!isNaN(month)) {

    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log('весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('осень');
            break;
        case 12:
        case 1:
        case 2:
            console.log('зима');
            break;

        default:
            console.log('некорректный ввод');
            break;
    }

} else {
    console.log('вы ввели букву');
}





