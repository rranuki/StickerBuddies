const selectedImage = JSON.parse(localStorage.getItem('selectedImage'));
console.log("selectedImage :" + selectedImage)
document.getElementById('StickerPreview').src = selectedImage.path;
document.getElementById('name').innerText = selectedImage.name;
document.getElementById('description').innerText = selectedImage.description;
document.getElementById('Artist').innerText = 'Sticker Art by ' + selectedImage.artist;
