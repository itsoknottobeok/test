const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')

form.addEventListener('submit', function (e) {
    // prevent default behavior
    e.preventDefault()
    const catName = input.value
    const newLI = document.createElement("LI")
    newLI.innerHTML = catName
    // console.log(newLI)
    list.append(newLI)
    input.value = ""

})