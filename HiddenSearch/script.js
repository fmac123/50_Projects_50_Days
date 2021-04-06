const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')/* toggle: toggles the active class on and off */
    input.focus() /* so cursor starts in search bar */
})