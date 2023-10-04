// 9. У вас есть кнопка. После каждого нажатия менять background.

const btn = document.querySelector('button');
let flag = false;
const arr = ['yellow', 'magenta', 'grey', 'green', 'cyan']
btn.addEventListener('click', () => {
    if (!flag) {
        flag = true;
        const color = arr[Math.round(Math.random() * arr.length)]
        btn.style = `background-color:${color}`

    } else {
        flag = false;
        btn.style = 'background-color:white'
    }
})