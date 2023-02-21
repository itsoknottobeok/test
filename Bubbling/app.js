const btn = document.querySelector('#changeColor')
const ctn = document.querySelector('#container')
btn.addEventListener('click', function (e) {
    ctn.style.backgroundColor = makeRandColor()
    e.stopPropagation()
})

ctn.addEventListener('click', function () {
    ctn.classList.toggle('hide')
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}