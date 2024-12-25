const IconCartEl = document.getElementById("CartIcon")
const CloseButtonEl = document.getElementById("close")
const body = document.getElementById("body")

IconCartEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

CloseButtonEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

