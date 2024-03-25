// 5. Пользователь вводит число с клавиатуры. Нужно вывести на экран положительное оно или отрицательное.
//  Например, "Число " + num + " положительное". Добавить проверку на число


let x = prompt('введите число');

// 1
if (isNaN(x)) {
    console.log('error');
} else {
    if (x >= 0) {
        console.log('число положительное', x);
    } else {
        console.log('число отрицательное', x);
    }
}

// 2
if (isNaN(x)) {
    console.log('error');
} else {
    if (x >= 0) console.log('число положительное', x);
    else console.log('число отрицательное', x);
}

// 3
if (!isNaN(x) && x >= 0) {
    console.log('число положительное', x);
} else if (!isNaN(x) && x < 0) {
    console.log('число отрицательное', x);
} else {
    console.log('error');
}





