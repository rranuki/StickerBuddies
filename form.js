    document.getElementById("entry.1873864105").style = "display:none;"
    const selectedImage = JSON.parse(localStorage.getItem('selectedImage'));
    document.getElementById("entry.1873864105").value = selectedImage.page + " | " + selectedImage.name + " | " + selectedImage.id + " | " + selectedImage.artist;
    
    function SendAnAlert(){

        if(document.getElementById("entry.2011975985").style = "display:none;"){
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
    setTimeout(() => {
        document.getElementById("hi").innerText = "Thank you for getting a Sticker Buddy! Your sticker should arrive in about a week!"  
        // document.getElementById("hi").style = "padding-top: 20%"  
        document.getElementById("spriggy").style = "display:unset;"
        document.getElementById("loading").style = "display:none;"
        document.getElementById("cmon").style = "display:unset;"
    }, 3000);
        }else{
            alert("fill it in or else!")
        }
}
