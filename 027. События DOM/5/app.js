

const btn = document.querySelector('button')
const input = document.querySelector('input');


btn. addEventListener('click', ()=>{
    const arr = [0,1];
    for (let i = 2; i < arr.length; i++) {
        arr[i]=arr[i-2]+arr[i-1]
        
    }
  p.innerHTML = arr
})