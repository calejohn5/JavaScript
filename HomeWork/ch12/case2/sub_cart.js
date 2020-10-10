"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Caleb Johnson
   Date: 2/15/2020

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
window.addEventListener("load", setupCart);

//function for event handler to utilize our buttons 
function setupCart() {
    var addButtons = document.getElementsByClassName("addButton");
    
    for(var i = 0; i < addButtons.length; i++){
		addButtons[i].addEventListener("click",addItem);
    }
}

function addItem (e) {
    var foodItem = e.target.nextElementSibling;
    var foodID = foodItem.id;
    var foodDescription = foodItem.cloneNode(true);
    var cartBox = document.getElementById("cart");
    var duplicateOrder = false;
    
            // start looping for id of the clicked item
            for (var x = cartBox.firstElementChild; x !== null;
            x = x.nextSibling) {
                if (x.id === foodID) {
                    x.lastElementChild.innerHTML = parseInt(x.lastElementChild.innerHTML,10) + 1;
                duplicateOrder = true;
                
                //end loop
            break;
                }
            }
    if (duplicateOrder !== true) {
        var orderCount = document.createElement("span");
		orderCount.textContent = 1;
		foodDescription.appendChild(orderCount);
        cartBox.appendChild(foodDescription);
    }
}
