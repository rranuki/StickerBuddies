const IconCartEl = document.getElementById("CartIcon")
const body = document.getElementById("body")
const CloseButtonEl = document.getElementById("close")
const listProductsHTML = document.getElementById("ProductList")
const listCartHTML = document.getElementById("listCart")
const IconCartSpan = document.getElementById("DaSPAN")
// console.log(CloseButtonEl.innerText)
// StartRemove()
let numberInCart = 0
let carts = []
let singleItem = []

const UpdatedCart = JSON.parse(localStorage.getItem('UpdatedCart'));
console.log(UpdatedCart)


// let ProductList = []

IconCartEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

CloseButtonEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})



// function AddToCart(imageId){

// }
// function StartRemove() {

//     var removeCartItemButtons = document.getElementsByClassName("Remove")
//     // console.log("hi")

//     for (let i = 0; i < removeCartItemButtons.length; i++) {
//         var button = removeCartItemButtons[i]
//         button.addEventListener('click', removeCartItem)
//     }
// }

// function removeCartItem(event) {
//     numberInCart--
//     IconCartSpan.innerText = numberInCart
//     var buttonClicked = event.target
//     console.log(buttonClicked.parentElement.dataset.id)
//     // console.log(findIndex(buttonClicked.parentElement.dataset.id))
//     buttonClicked.parentElement.remove()
//     // console.log(buttonClicked)
// }

// Do the code above LATER!!

let inputs = document.getElementsByClassName("number")


function RedirectToDetails(imageId){
    console.log("it works!")
    fetch('StickerInfo.json')
    .then(response => response.json())
    .then(images =>{
        const selectedImage = images.find(image => image.id === imageId)
        localStorage.setItem('selectedImage', JSON.stringify(selectedImage))
        window.location.href = 'StickerDescription.html'
    })
    .catch(error => console.error('Error loading JSON file:', error))
}