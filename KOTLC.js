



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