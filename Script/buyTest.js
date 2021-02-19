// This file is for the zoom box



function setInfo() {
    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var name = localStorage.getItem("name");    // saves the image title
    var description = localStorage.getItem("description"); //Saves the image decription
    var width = localStorage.getItem("width");
    var height = localStorage.getItem("height");

    var image = document.getElementById('buy_img');
    image.src = img__name;  // saves the image source to the proper one saved when the page is loaded
    image.width = width;
    image.height= height;

    document.getElementById("title__text").innerHTML = name; //Sets the title sent by clicking picture
    document.getElementById("description__text").innerHTML = description; //Sets the description sent by clicking picture
}


function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;

    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var image__width = localStorage.getItem("width");
    var image__height = localStorage.getItem("height");
    var image = document.getElementById('buy_img');

    image.width = image__width + "px";
    image.height= image__height + "px";
    image.src = img__name;  // saves the image source to the proper one saved when the page is loaded
    

    image = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    image.parentElement.insertBefore(lens, image);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + image.src + "')";
    result.style.backgroundSize = (image__width * cx) + "px " + (image__height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    image.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    image.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > image.width - lens.offsetWidth) { x = image.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > image.height - lens.offsetHeight) { y = image.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = image.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}