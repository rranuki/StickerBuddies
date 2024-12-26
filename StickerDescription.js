const selectedImage = JSON.parse(localStorage.getItem('selectedImage'));
console.log("selectedImage :" + selectedImage)
document.getElementById('StickerPreview').src = selectedImage.path;
document.getElementById('name').innerText = selectedImage.name;
document.getElementById('description').innerText = selectedImage.description;
document.getElementById('Artist').innerText = 'Sticker Art by ' + selectedImage.artist;

let theNewCart = []
let numberInCart = 0
let carts = []
var CartFromOldPage = ''
// let singleItem = []
// var PastCart = JSON.parse(localStorage.getItem('CART'));
// console.log(PastCart)

// var CartFromOldPage = JSON.parse(localStorage.getItem('bb'))
var waaa =  localStorage.getItem('bb')
// var CartFromOldPage = localStorage.getItem('aa')

// console.log(CartFromOldPage)
if(waaa == 'undefined' || waaa == null){
    waaa = []
    CartFromOldPage = waaa
}else{
    CartFromOldPage = JSON.parse(waaa)
}


// console.log(JSON.parse(CouldBeNull))
// const CartFromOldPage = JSON.parse(CouldBeNull)
console.log('this is it:'+CartFromOldPage)
// console.log(CartFromOldPage + "HEEHEE")
// var CartFromOldPage = JSON.parse(Erm);
// console.log(CartFromOldPage[0])
let full = []
// let sendIt = []
// let partOfCart = []
// setIt()

// function setIt(){
//     // console.log("HIIIII!")
//     if (PastCart == null) {

//     }else{
//         // carts = PastCart
//         console.log("HIIIII!")

//     }
// }
const IconCartEl = document.getElementById("CartIcon")
const body = document.getElementById("body")
const CloseButtonEl = document.getElementById("close")
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
    console.log("Good morning!")
}

IconCartEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

CloseButtonEl.addEventListener('click', () => {
    body.classList.toggle("showCart")
})

function StartRemove() {
    console.log("Enter StartRemove()")
    const removeCartItemButtons = document.getElementsByClassName('Remove')
    console.log(removeCartItemButtons.length)
    console.log(removeCartItemButtons)
    for (let i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // removeCartItemButtons.addEventListener('click', removeCartItem())
    
    console.log("End StartRemove()")
}

function removeCartItem(event) {
    console.log("REMOVING")
    numberInCart--
    IconCartSpan.innerText = numberInCart
    var buttonClicked = event.target
    console.log(buttonClicked.parentElement.dataset.id)
    // console.log(findIndex(buttonClicked.parentElement.dataset.id))
    buttonClicked.parentElement.remove()
    // console.log(buttonClicked)
    RememberThis()
}

function AddToCart() {
    // if (numberInCart < 5) {
                // const imagePicked = selectedImage.path
                // window.location.href = 'StickerDescription.html'
                // console.log(selectedImage)
                
                    for (let j = 0; j < CartFromOldPage.length; j++) {
                        const part = CartFromOldPage[j];
                        theNewCart.push(part[0])
                        // console.log(theNewCart)
                    }
                
                if (theNewCart.includes(JSON.stringify(selectedImage.id))) {
                    let getting = document.getElementsByClassName("CartItem")
                    // console.log(getting)
                    for (let i = 0; i < getting.length; i++) {
                        const now = getting[i];
                        // console.log(now.dataset.id)
                        if (now.dataset.id == selectedImage.id) {
                            const num = now.querySelector('.number')
                            if (num.innerText < 5) {
                                num.innerText++
                            }
                        }
                        RememberThis()
                    }
                } else {
                    const newItem = document.createElement("div")
                    newItem.classList = "CartItem"
                    // partOfCart.splice(0,0,selectedImage.id)
                    // partOfCart.splice(1,0,1)
                    carts.push(selectedImage.id)
                    // console.log("meow:" + carts)
                    newItem.dataset.id = selectedImage.id
                    let quantity = 1
                    newItem.innerHTML =
                        `<div class="picture">
                <img src="${selectedImage.path}" alt="">
            </div>
            <div class="name">${selectedImage.name}</div>
            <div class="quantity">
                <span class="minus"><</span>
                <span class="number" id="number">${quantity}</span>
                <span class="plus">></span>
            </div>
            <button class="Remove">X</button>`

                    listCartHTML.appendChild(newItem)
                    numberInCart++
                    IconCartSpan.innerText = numberInCart
                    StartRemove()
                    RememberThis()
                }

            }
            // UPDATE()
// }

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



// function GetItemsFromCart(itemId) {
//     let thisOne = [];
//     let getting = document.getElementsByClassName("CartItem")
//     for (let i = 0; i < getting.length; i++) {
//         const Which = getting[i];
//         if (Which.dataset.id == itemId) {
//             var quantity = Which.querySelector('.number')
//             thisOne.splice(0, 0, itemId, quantity.innerText)
//             console.log(itemId)
//             // console.log(thisOne)
//             singleItem = thisOne
//             sendIt.push(singleItem)
//         }
//     }
            
// }

function RememberThis(){
    console.log("Enter RememberThis()")
    full = []
    // carts = []
    console.log("Yo Bro!")
    // let item = document.g(itemID)
    let theSet = document.getElementsByClassName("CartItem")
    for (let i = 0; i < theSet.length; i++) {
        const RightNow = theSet[i];
        console.log(RightNow)
        let OneBitOfArray = []
        OneBitOfArray.push(RightNow.dataset.id)
        // carts.push(RightNow.dataset.id)
        // console.log(carts)

        let Quant = RightNow.querySelector(".number")
        console.log(Quant)
        OneBitOfArray.push(Quant.innerText)
        full.push(OneBitOfArray)
        var SavedCart = JSON.stringify(full)
        console.log(SavedCart + "hohoho")
    }
    localStorage.setItem("bb", SavedCart);
    localStorage.setItem("CART", carts);

    console.log("End RememberThis()")
}
    var StickerID = ''
    var StickerQuant = ''

function PutBackInCart(){
    if (CartFromOldPage == []) {
        
    } else {
        console.log("Enter PutBackInCart()")
    var theInform = "" 
    console.log("yello!")
    // let CartToUpdate = CartFromOldPage
    console.log(CartFromOldPage +"meow")
    for (let i = 0; i < CartFromOldPage.length; i++) {
        var singleItem = CartFromOldPage[i];
            StickerID = singleItem[0]
            console.log(StickerID + "ahem")
            StickerQuant = singleItem[1]
            console.log("it works!")
            FetchItPlease(StickerID, StickerQuant)
    }
    console.log("End of PutBackInCart()")
    }
    
}

function FetchItPlease(StickerID, StickerQuant) {
    console.log("Enter FetchItPlease()")
    fetch('StickerInfo.json')
    .then(response => response.json())
    .then(ID =>{
            console.log(StickerID + "AHA!")
            let DAid = StickerID
                theInform = ID.find(ID => ID.id === JSON.parse(StickerID))
                console.log(theInform)
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
        
    console.log("End FetchItPlease()")
}

// function CHECKOUT() {
//     sendIt =[]
//     console.log(carts)
//     for (let i = 0; i < carts.length; i++) {
//         var itemId = carts[i]
//         console.log(itemId)
//         GetItemsFromCart(itemId)
//     }
//     // let full = []
//     // full.push([singleItem])
//     console.log(sendIt)
//     sendIt = []
//     let now = document.getElementsByClassName("CartItem")
//     for (let i = 0; i < now.length; i++) {
//         // carts.splice(0,1)
//         numberInCart--
//         const item = now[i];
//         item.remove()
//     }
//     IconCartSpan.innerText = numberInCart
//     console.log(sendIt)
// }

// function UPDATE() {
//     full = []
//     console.log("carts = "+carts)
//     for (let i = 0; i < carts.length; i++) {
//         var itemId = carts[i]
//         console.log(itemId)
//         GetItemsFromCart(itemId)
//     }

//     full.push(singleItem)
//     console.log("full:"+full)
//     localStorage.setItem('UpdatedCart', JSON.stringify(full))
//     full = []
//     // full = 1
// }



// function SpawnInCart(){
//     if (singleItem.length < 1) {
//         console.log("carty-warty = " + singleItem)
//     }else{
//     console.log("yo:"+UpdatedCart.length)
//     let iD = 0
//     let Quant = 0
//     console.log("CARTTTT:"+carts)
//     for (let i = 0; i < UpdatedCart.length; i++) {
//         let thisItem = UpdatedCart[i];
//         console.log(thisItem)

//         for (let j = 0; j < thisItem.length; j++) {
//             const part = thisItem[j];
//             if(j == 0){
//                 iD = part
//             }
//             if(j == 1){
//                 Quant = part
//             }
//             console.log(Quant)
            
//         }
//     }
    // fetch('StickerInfo.json')
    //         .then(response => response.json())
    //         .then(info =>{
    //             const LAid = info.find(whichOne => whichOne.id === iD)
    //             console.log("La Id:"+iD)
    //             const newItem = document.createElement("div")
    //                 newItem.classList = "CartItem"
    //                 // carts.push(selectedImage.id)
    //                 // console.log(carts)
    //                 newItem.dataset.id = LAid
    //                 // let quantity = 1
    //                 newItem.innerHTML =
    //                     `<div class="picture">
    //             <img src="${LAid.path}" alt="">
    //         </div>
    //         <div class="name">${LAid.name}</div>
    //         <div class="quantity">
    //             <span class="minus"><</span>
    //             <span class="number" id="number">${Quant}</span>
    //             <span class="plus">></span>
    //         </div>
    //         <button class="Remove">X</button>`

    //                 listCartHTML.appendChild(newItem)
    //                 numberInCart++
    //                 IconCartSpan.innerText = numberInCart
    //         })
    //         .catch(error => console.error('Error loading JSON file:', error))
    // }
// }

