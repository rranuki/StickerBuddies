const IconCartEl = document.getElementById("CartIcon")
const body = document.getElementById("body")
const CloseButtonEl = document.getElementById("close")
// const listProductsHTML = document.getElementById("ProductList")
// const listCartHTML = document.getElementById("listCart")
// const IconCartSpan = document.getElementById("DaSPAN")
// console.log(CloseButtonEl.innerText)
// StartRemove()
// let numberInCart = 0
// let carts = []
// let singleItem = []

// const UpdatedCart = JSON.parse(localStorage.getItem('UpdatedCart'));
// console.log(UpdatedCart)


// let ProductList = []

IconCartEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

CloseButtonEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

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

let theNewCart = []
let numberInCart = 0
var carts = ''
var CartFromOldPage = ''
// let singleItem = []
var LetsCheck = localStorage.getItem('CART');
if(LetsCheck == 'undefined' || waaa == null){
    LetsCheck = []
    carts = LetsCheck
}else{
    carts = JSON.parse(LetsCheck)
}

// console.log(PastCart)

// var CartFromOldPage = JSON.parse(localStorage.getItem('bb'))
var waaa =  localStorage.getItem('grrr')
// var CartFromOldPage = localStorage.getItem('aa')

// console.log(CartFromOldPage)
if(waaa == 'undefined' || waaa == null || waaa == ''){
    waaa = []
    CartFromOldPage = waaa
}else{
    CartFromOldPage = JSON.parse(waaa)
}


// console.log('this is it:'+CartFromOldPage)

let full = []

const listProductsHTML = document.getElementById("ProductList")
const listCartHTML = document.getElementById("listCart")
const IconCartSpan = document.getElementById("DaSPAN")

const UpdatedCart = JSON.parse(localStorage.getItem('UpdatedCart'));
PutBackInCart()
Greetings()
setTimeout(() => {
    StartRemove()
}, 1000);

// carts = UpdatedCart
// console.log("rawr:" + [carts])
// UPDATE()
// SpawnInCart()

function Greetings(){
    // console.log("Good morning!")
}

function StartRemove() {
    // console.log("Enter StartRemove()")
    const removeCartItemButtons = document.getElementsByClassName('Remove')
    // console.log(removeCartItemButtons.length)
    // console.log(removeCartItemButtons)
    for (let i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // removeCartItemButtons.addEventListener('click', removeCartItem())
    
    // console.log("End StartRemove()")
}

function removeCartItem(event) {
    // console.log("REMOVING")
    numberInCart--
    IconCartSpan.innerText = numberInCart
    var buttonClicked = event.target
    // console.log(buttonClicked.parentElement.dataset.id)
    // console.log(findIndex(buttonClicked.parentElement.dataset.id))
    buttonClicked.parentElement.remove()
    // console.log(buttonClicked)
    RememberThis()
}

listCartHTML.addEventListener('click', (event) => {
    let positionClicked = event.target
    let item = positionClicked.parentElement.parentElement
    // let span = item.getElementsByClassName("number")
    if (positionClicked.classList.contains("minus")) {
        const itemnumber = item.querySelector('.number');
        if (itemnumber.innerText > 1) {
            itemnumber.innerText--
            // console.log(itemnumber.innerText)
            RememberThis()
        } else {

        }
    }
    if (positionClicked.classList.contains("plus")) {
        const itemnumber = item.querySelector('.number');
        if (itemnumber.innerText < 5) {
            itemnumber.innerText++
            // console.log(itemnumber.innerText)
            RememberThis()
        } else {
        }

    }
})

var SavedCart = ''

function RememberThis(){
    // console.log("Enter RememberThis()")
    full = []
    carts = []
    // console.log("Yo Bro!")
    // let item = document.g(itemID)
    let theSet = document.getElementsByClassName("CartItem")
    // console.log(theSet)
    if (theSet.length == 0) {
        SavedCart = ''
        // console.log("aha!")
    } else {
         for (let i = 0; i < theSet.length; i++) {
        const RightNow = theSet[i];
        // console.log(RightNow)
        let OneBitOfArray = []
        OneBitOfArray.push(RightNow.dataset.id)
        carts.push(RightNow.dataset.id)
        // console.log(carts)

        let Quant = RightNow.querySelector(".number")
        // console.log(Quant)
        OneBitOfArray.push(Quant.innerText)
        full.push(OneBitOfArray)
        SavedCart = JSON.stringify(full)
        // console.log(SavedCart + "hohoho")
        }
    }
   
    localStorage.setItem("grrr", SavedCart);
    localStorage.setItem("CART", carts);

    // console.log("End RememberThis()")
}
    var StickerID = ''
    var StickerQuant = ''

function PutBackInCart(){
    if (CartFromOldPage == []) {
        
    } else {
        // console.log("Enter PutBackInCart()")
    var theInform = "" 
    // console.log("yello!")
    // let CartToUpdate = CartFromOldPage
    // console.log(CartFromOldPage +"meow")
    for (let i = 0; i < CartFromOldPage.length; i++) {
        var singleItem = CartFromOldPage[i];
            StickerID = singleItem[0]
            // console.log(StickerID + "ahem")
            StickerQuant = singleItem[1]
            // console.log("it works!")
            FetchItPlease(StickerID, StickerQuant)
    }
    // console.log("End of PutBackInCart()")
    }
    
}

function FetchItPlease(StickerID, StickerQuant) {
    // console.log("Enter FetchItPlease()")
    fetch('StickerInfo.json')
    .then(response => response.json())
    .then(ID =>{
            // console.log(StickerID + "AHA!")
            let DAid = StickerID
                theInform = ID.find(ID => ID.id === JSON.parse(StickerID))
                // console.log(theInform)
                const newItem = document.createElement("div")
                    newItem.classList = "CartItem"
                    // partOfCart.splice(0,0,selectedImage.id)
                    // partOfCart.splice(1,0,1)
                    // carts.push(selectedImage.id)
                    // console.log("meow:" + carts)
                    newItem.dataset.id = theInform.id
                    // let quantity = 1
                    newItem.innerHTML =
                        `<div class="picture">
                <img src="${theInform.path}" alt="">
            </div>
            <div class="name">${theInform.name}</div>
            <div class="quantity">
                <span class="minus"><</span>
                <span class="number" id="number">${StickerQuant}</span>
                <span class="plus">></span>
            </div>
            <button class="Remove">X</button>`

                    listCartHTML.appendChild(newItem)
                    numberInCart++
                    IconCartSpan.innerText = numberInCart
                    // StartRemove()
                    RememberThis()
             })
        .catch(error => console.error('Error loading JSON file:', error))
        
    // console.log("End FetchItPlease()")
}

function CHECKOUT(){
    if (SavedCart == '' || SavedCart == []){
        alert("You cannot place an empty order!")
    }else{
        if (confirm("Are you sure you have finished all your shopping? Your cart will be cleared as soon as you are sent to the form page.")){
    // console.log(listCartHTML.getElementsByClassName('CartItem').length)
    for (let i = listCartHTML.getElementsByClassName('CartItem').length - 1; i >= 0; --i) {
        const item = listCartHTML.getElementsByClassName('CartItem')[i];
        // item.remove()
        // console.log(item)
        item.remove()
    }
    // console.log(SavedCart)
    localStorage.setItem("whoa", SavedCart);
    RememberThis()
   
    setTimeout(() => {
        window.location.href = 'form.html'
    }, 100);
    } else{
        return
    }
    }
    

}