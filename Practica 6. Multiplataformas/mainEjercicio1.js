document.getElementById("imageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const imageURL = document.getElementById("imageURL").value;
    if (imageURL) {
        addImageToGallery(imageURL);
        document.getElementById("imageURL").value = "";
    }
});

document.getElementById("removeImage").addEventListener("click", function() {
    removeImageFromGallery();
});

function addImageToGallery(imageURL) {
    const gallery = document.getElementById("imageGallery");
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";
    const image = document.createElement("img");
    image.src = imageURL;
    image.className = "img-fluid";
    col.appendChild(image);
    gallery.appendChild(col);
}

function removeImageFromGallery() {
    const gallery = document.getElementById("imageGallery");
    if (gallery.children.length > 0) {
        gallery.removeChild(gallery.lastChild);
    }
}