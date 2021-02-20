function dataSet(param1, param2, param3, param4){
    localStorage.setItem("image", param1);
    localStorage.setItem("name", param2);
    localStorage.setItem("description", param3);

    var image = document.getElementById(param4);

    var ratio = image.height/image.width;
    localStorage.setItem("ratio", ratio);

}
