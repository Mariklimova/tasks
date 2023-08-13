// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)


let month = 2;
// 1
if (!isNaN(month)) {
    if (month > 0 && month < 13) {
        if (month >= 3 && month <= 5) {
            console.log('весна');
        } else if (month >= 6 && month <= 8) {
            console.log('лето');
        } else if (month >= 9 && month <= 11) {
            console.log('осень');
        } else {
            console.log('зима');
        }
    } else {
        console.log('некорректный ввод');
    }
} else {
    console.log('вы ввели букву');
}





