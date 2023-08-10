// 9. Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case.

let num = prompt();

if (isNaN(num)) {
    console.log('вы ввели букву')
} else {
    switch (nam) {
        case '1':
            console.log('winter');
            break;
        case '2':
            console.log('spring');
            break;
        case '3':
            console.log('sammer');
            break;
        case '4':
            console.log('осень');
            break;

        default:
            console.log('error');
            break;
    }
}