// 9. Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div


const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const do_ = document.querySelector('.do_');
    const del = document.querySelector('.del');
    const arr = [];
    const newArr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.round(Math.random() * 100))

    }
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = arr[i]
        do_.appendChild(li)
    }

    do_.addEventListener('click', (event) => {
        do_.removeChild(event.target);
        newArr.push(event.target.textContent)
        del.innerHTML = newArr
    })
})

