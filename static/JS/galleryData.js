function addRow() {

    var pics = 9;
    var names = ["fill later", "fill later", "fill later","fill later", "fill later", "fill later","fill later", "fill later", "fill later"];
    var descriptions = ["fill later", "fill later", "fill later","fill later", "fill later", "fill later","fill later", "fill later", "fill later"];

    var div = document.createElement("div");
    div.className = "row";

    var col1 = document.createElement("div");
    var col2 = document.createElement("div");
    var col3 = document.createElement("div");
    col1.className = "col";
    col2.className = "col";
    col3.className = "col";
    const cols = [col1, col2, col3];



    for (var i = 0; i < pics; i++) {
        const image = document.createElement("div");
        image.className = "image";
    
        const overlay = document.createElement("div");
        overlay.className = "image__overlay image__overlay--blur";

        var image__img = document.createElement("img");
        image__img.className = "image__img";
        image__img.id =  (i + 1);
        image__img.setAttribute('src', '..\\static/images/gallery/' + (i + 1) + '.png');

        var title = document.createElement("div");
        title.className = "image__title";
        title.innerHTML = names[i];

        var description = document.createElement('p');
        description.className = "image__description";
        description.innerHTML = descriptions[i];

        var a = document.createElement("a");
        a.href = "buy";
        a.setAttribute("onClick", 'dataSet("..\\\\\\static/images/gallery/' + (i + 1) + '.png", " Moustache Man ", " Has funny moustache. I need to make sure that this is gonna work when the caption is descent sized.  ", "' + (i + 1) + '")');
     
        overlay.appendChild(title.cloneNode(true));
        overlay.appendChild(description.cloneNode(true));
        image.appendChild(image__img.cloneNode(true));
        image.appendChild(overlay.cloneNode(true));
        a.appendChild(image.cloneNode(true));
        cols[i % 3].appendChild(a.cloneNode(true));
    };
    div.appendChild(cols[0].cloneNode(true));
    div.appendChild(cols[1].cloneNode(true));
    div.appendChild(cols[2].cloneNode(true));
    document.getElementById('content').appendChild(div);
}






function dataSet(param1, param2, param3, param4) {
    localStorage.setItem("image", param1);
    localStorage.setItem("name", param2);
    localStorage.setItem("description", param3);

    var image = document.getElementById(param4);

    var ratio = image.height / image.width;
    localStorage.setItem("ratio", ratio);
}
