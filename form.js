    let toBeSent = ''
    var eachTime = '|'
    document.getElementById("entry.1873864105").style = "display:none;"
    const CartFromOldPage = JSON.parse(localStorage.getItem("whoa"));
    console.log(CartFromOldPage)
    for (let i = 0; i < CartFromOldPage.length; i++) {
        const partywarty = CartFromOldPage[i];
        eachTime = eachTime + partywarty[0] + 'x' + partywarty[1] + '|'
    }
    console.log(eachTime)
    document.getElementById("entry.1873864105").value = eachTime
    // console.log(document.getElementById("entry.1873864105").getAttribute(length))

    
    function ChangeScreenDynamically(){
    //     if ((document.getElementById("entry.2011975985").value.length < 1)||(document.getElementById("entry.1530722911").value.length < 1)||(document.getElementById("entry.1066450418").value.length < 1)) {
    //         document.getElementById("hi").innerText = "Please fill out all the details"
    //         document.getElementById("hi").style = "color:rgb(255, 113, 113);"
    // } else {

    if (document.getElementById("entry.2011975985").value.length == "") {
        document.getElementById("hi").innerText = "Please fill out all the details"
        document.getElementById("hi").style = "color:rgb(172,0,0);"
        document.getElementById("entry.2011975985").style="border:solid .5vh rgb(172,0,0);"
    }
    if (document.getElementById("entry.1530722911").value.length == "") {
      document.getElementById("hi").innerText = "Please fill out all the details"
      document.getElementById("hi").style = "color:rgb(172,0,0);"
      document.getElementById("entry.1530722911").style="border:solid .5vh rgb(172,0,0);"
    } 
    if (document.getElementById("entry.1066450418").value.length == "") {
        document.getElementById("hi").innerText = "Please fill out all the details"
        document.getElementById("hi").style = "color:rgb(172,0,0);"
        document.getElementById("entry.1066450418").style="border:solid .5vh rgb(172,0,0);"
    } else{
    document.getElementById("submitIt").type= "submit";
    document.getElementById("entry.2011975985").style = "display:none;"
    document.getElementById("entry.1547255295").style = "display:none;"
    document.getElementById("entry.1530722911").style = "display:none;"
    document.getElementById("entry.1066450418").style = "display:none;"
    document.getElementById("name").style = "display:none;"
    document.getElementById("school").style = "display:none;"
    document.getElementById("class").style = "display:none;"
    document.getElementById("email").style = "display:none;"
    document.getElementById("submitIt").style = "display:none;"
    document.getElementById("loading").style = "display:unset;"
    document.getElementById("goBack").style = "display:none;" 
    // document.getElementById("loadingBox").style = "text-align: center;"
    document.getElementById("hi").innerText = "...Processing Request..."
    document.getElementById("hi").style = "color:white;"
    setTimeout(() => {
        document.getElementById("hi").innerText = "Thank you for getting a Sticker Buddy! Your sticker should arrive in about a week!"  
        // document.getElementById("hi").style = "padding-top: 20%"  
        document.getElementById("spriggy").style = "display:unset;"
        document.getElementById("loading").style = "display:none;"
        document.getElementById("cmon").style = "display:unset;"
    }, 3000);
    }
   
    
}