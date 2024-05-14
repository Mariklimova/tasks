// 1. Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением

const button = document.querySelector('.btn');


// 1
// button.addEventListener('click', function () {
//     alert('Hello')
// });


// 2
button.addEventListener('click', () => alert('Hello'));
