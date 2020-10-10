"use strict";

   /* 
    Author: Caleb Johnson
    Date: 03/07/2020
   */
   
document.getElementById("btnOne").onclick = function() {
    var userText = document.getElementById("userInput").value;
    var liNode = document.createElement("LI");                
    var textnode = document.createTextNode(userText);         
    liNode.appendChild(textnode);
    document.getElementById("todos").appendChild(liNode);
    
    var btn1 = document.createElement("button");
    var del = document.createTextNode("X");
    btn1.appendChild(del);
    document.getElementById("todos").appendChild(btn1);
    
    btn1.addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
    
    });
}
