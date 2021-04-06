const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () =>{
    
    if(!(currentActive > circles.length)){
        currentActive++
    }

    update()
})
prev.addEventListener('click', () =>{
   
    if(!(currentActive < 1)){
        currentActive--
    }
    update()
})

function update() {
    circles.forEach((circle,index)=>{
        if(index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    /* adding the blue line when circle is active */
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    }
    else if (currentActive === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}