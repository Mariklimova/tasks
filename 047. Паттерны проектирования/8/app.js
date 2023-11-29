// 8. Необходимо по кнопку включать и выключать песню

const btn = document.querySelector('button');
const audio = document.querySelector('audio');
let flag = false;


btn.addEventListener('click', () => {
    if (!flag) {
        audio.play();
        flag = true;
        btn.textContent = 'Stop'
    } else {
        audio.pause();
        flag = false;
        btn.textContent = 'Run'
    }
})
