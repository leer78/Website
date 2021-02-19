// This file is for the magnify effect


function setInfo() {
    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var name = localStorage.getItem("name");    // saves the image title
    var description = localStorage.getItem("description"); //Saves the image decription

    var image = document.getElementById('buy_img');

    image.src = img__name;  // saves the image source to the proper one saved when the page is loaded
    image.width = (window.innerWidth * 0.2);
    image.height = image.width * ratio;


    document.getElementById("title__text").innerHTML = name; //Sets the title sent by clicking picture
    document.getElementById("description__text").innerHTML = description; //Sets the description sent by clicking picture
}


function magnify(imgID, zoom) {
    var glass, w, h, bw;
    //img = document.getElementById(imgID);

    var img__name = localStorage.getItem("image");  // Saves the image name (directory)
    var img = document.getElementById('buy_img');
    var ratio = localStorage.getItem("ratio"); //Saves the image ratio (width to height)

    img.width = (window.innerWidth * 0.2);
    img.height = img.width * ratio;


    img.src = img__name;  // saves the image source to the proper one saved when the page is loaded

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img_magnifier_glass");
    glass.style.width = magnifyWidth + "px";
    glass.style.height = magnifyWidth + "px";


    var magnifyWidth = window.innerWidth / 16.8;


    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
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