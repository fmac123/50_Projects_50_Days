const boxes = document.querySelectorAll('.box')
// Stores the percentage of the window that will be used on the trigger
const windowPortion = 0.8

window.addEventListener('scroll', checkBoxes)

checkBoxes()/* to add the initial couple of boxes without scrolling */

function checkBoxes() {
    const triggerBottom = window.innerHeight * windowPortion

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}