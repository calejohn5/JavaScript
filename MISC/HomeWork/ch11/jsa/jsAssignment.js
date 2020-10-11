"use strict"

document.getElementById("comments").addEventListener("paste",noPaste);
function noPaste(e){
    document.getElementById("comments").value = "";
    window.alert("I wasn't lying");
    e.preventDefault();
}