// This file is for the magnify effect

function setInfo() {
    console.log("IM HERE");
    var name = localStorage.getItem("name");    // saves the image title
    var description = localStorage.getItem("description"); //Saves the image decription

    //document.getElementById("image_title").innerHTML = name; //Sets the title sent by clicking picture
    //document.getElementById("image_description").innerHTML = description; //Sets the description sent by clicking picture    
}


function appear(){
    var glass = document.getElementById("glass");
    glass.style.visibility = "visible";
}

function disappear(){
    var glass = document.getElementById("glass");
    glass.style.visibility = "hidden";
}

function magnify(imgID, zoom) {
    setInfo();
    var w, h, bw;
    var glass = document.getElementById("glass");   // Created empty DIV. cannot create new one in this function or a new one would be made every time the screen gets resized
    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var img = document.getElementById(imgID);
    var ratio = localStorage.getItem("ratio"); //Saves the image ratio (width to height)

    img.width = (window.innerWidth * 0.2);
    img.height = img.width * ratio;

    img.src = img__name;  // saves the image source to the proper one saved when the page is loaded

    var magnifyWidth = window.innerWidth / 16.8;

    glass.style.width = magnifyWidth + "px";
    glass.style.height = magnifyWidth + "px";

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";         // PROBABLY HAVE TO CHANGE THIS FOR THE FLASK TO WORK
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }
        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}