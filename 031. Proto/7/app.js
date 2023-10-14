// 7. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const quantity = document.querySelector('.quantity');
const distance = document.querySelector('.distance');
const width = document.querySelector('.width');
const btn = document.querySelector('button');
const p = document.querySelector('p');


btn.addEventListener('click', () => {
    try {
        if (!quantity.value || !distance.value || !width.value) throw new Error('value is empty');
        if (isNaN(quantity.value) || isNaN(distance.value) || isNaN(width.value)) throw new Error('the value is not nomber');
        if (quantity.value < 0 || distance.value < 0 || width.value < 0) throw new Error('the value is negative');
        if (quantity.value < 2) throw new Error('the value does not match the task condition');
        if (distance.value < 10 && distance.value > 30) throw new Error('the value does not match the task condition');
        if (width.value < 10 && width.value > 50) throw new Error('the value does not match the task condition');

        const res = (width.value/100) * quantity.value + distance.value * (quantity.value - 1);
        p.textContent = `Result: ${res}`;

        quantity.value = '';
        distance.value = '';
        width.value = '';
    } catch (error) {
        alert(error.message)
    }
})
