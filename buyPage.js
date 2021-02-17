function hover() {
    var image = document.getElementById('buyImg');
    image.src = "..\\Images/error.jpg";
}

function unhover() {

    var img__name = localStorage.getItem("image");
    var image = document.getElementById('buyImg');
    image.src = img__name;
}



function getImage() {
    var img__name = localStorage.getItem("image");
    var name = localStorage.getItem("name");
    var description = localStorage.getItem("description");
    var image = document.getElementById('buyImg');
    image.src = img__name;
}