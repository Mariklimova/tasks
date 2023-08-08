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