// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]


const n = +prompt();

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}

function filtArr(n) {
    let res = doArr(n);
    return res.map((el) => "#" + el)

}
const filt = filtArr(n);
console.log(filt);