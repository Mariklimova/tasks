// 9. Добавить переключение нескольких песен

const run = document.querySelector('.run');
const audio = document.querySelector('audio');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const img = document.querySelector('.img');

let flag = false;
const audios = [{ path: './assets/song1.mp3', artist: 'Olga Buzova', song: 'song1', img: './assets/image_1.png' },
{ path: './assets/song2.mp3', artist: 'Egor Krid',song: 'song2', img: './assets/image_2.png'},
{ path: './assets/song3.mp3', artist: 'Nensy', song: 'song3', img: './assets/image_3.png'}];
let current_index_song = 0;


run.addEventListener('click', () => {
    if (!flag) {
        audio.play();
        flag = true;
        run.textContent = 'Stop'
    } else {
        audio.pause();
        flag = false;
        run.textContent = 'Run'
    }
    h1.textContent = audios[current_index_song].artist;
    h2.textContent = audios[current_index_song].song;
    img.style = `background-image: url(${audios[current_index_song].img})`
})


next.addEventListener('click', () => {
    if (audios.length - 1 === current_index_song) return;
    current_index_song++
    audio.src = audios[current_index_song].path
    audio.play();
    run.textContent = 'Stop'
    flag = true;
    h1.textContent = audios[current_index_song].artist;
    h2.textContent = audios[current_index_song].song;
    img.style = `background-image: url(${audios[current_index_song].img})`
})
previous.addEventListener('click', () => {
    if (current_index_song === 0) return;
    current_index_song--
    audio.src = audios[current_index_song].path
    audio.play();
    run.textContent = 'Stop'
    flag = false;
    h1.textContent = audios[current_index_song].artist;
    h2.textContent = audios[current_index_song].song;
    img.style = `background-image: url(${audios[current_index_song].img})`
})