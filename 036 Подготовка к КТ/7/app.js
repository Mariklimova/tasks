// 7. Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое


const btn = document.querySelector('button');


function isValid() {
    if()
}
btn.addEventListener('click', () => {
    const input = document.querySelector('input');
    const value = document.querySelector('.value');
    const duble = document.querySelector('.duble');
    try {
        isValid(inp);
        
      value.innerHTML += input.value;
      doble.innerHTML = input.value*2;

        input.value = '';
    } catch (error) {
        alert(error, message)
    }
})
