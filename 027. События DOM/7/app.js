

const inp = document.querySelector('input');
const btn = document.querySelector('.button');
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('')
        p.textContent = 'Result' + inp.value * 2;
    } catch (error) {
        alert(error.message)
    }
})