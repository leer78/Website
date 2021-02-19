

/*
function hover() {
    var image = document.getElementById('buyImg');
    image.src = "..\\Images/error.jpg";     // By defualt changes to error image when hovering. change to proper one    
}

function unhover() {
    var img__name = localStorage.getItem("image");
    var image = document.getElementById('buyImg');
    image.src = img__name;
}
*/


function setInfo() {
    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var name = localStorage.getItem("name");    // saves the image title
    var description = localStorage.getItem("description"); //Saves the image decription

    var image = document.getElementById('buyImg');
    image.src = img__name;  // saves the image source to the proper one saved when the page is loaded

    document.getElementById("title__text").innerHTML = name; //Sets the title sent by clicking picture
    document.getElementById("description__text").innerHTML = description; //Sets the description sent by clicking picture
}


