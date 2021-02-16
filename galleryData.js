function dataSet(param1, param2, param3){
    alert("IMAGE: " + param1);
    alert("NAME: " + param2);
    alert("Description: " + param3);
    localStorage.setItem("image", param1);
    localStorage.setItem("name", param2);
    localStorage.setItem("description", param3);
}
