// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 

let x = 18;

for (let i = 1; i < x; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}