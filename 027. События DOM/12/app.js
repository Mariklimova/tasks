

// const btn = 
// btn.addEventListener('click',()=>{
//     try {
//         if (condition) {
//             p.innerHTML+=
//         }
//     } catch (error) {

//     }
// })
const btn = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('p')
const arr = []
btn.addEventListener('click', () => {
    try {
        if (!input.value) throw new Error('error')
        arr.push(input.value)
        p.innerHTML = arr
    } catch (error) {
        alert(error.message)
    }
})