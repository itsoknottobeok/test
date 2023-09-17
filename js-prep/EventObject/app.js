const button = document.querySelector('button')
button.addEventListener('click', function (evt) {
    console.log(evt)
    alert('click')
})

const input = document.querySelector('input')
input.addEventListener('keydown', function (e) {
    console.log(e.key)
    console.log(e.code)
})

// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!')
            break
        case 'ArrowDown':
            console.log('DOWN!')
            break
        default:
            console.log('IGNORED')
    }
})