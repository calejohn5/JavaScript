"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

    Author: Caleb Johnson
    Date:   2/23/2020
   
   Filename: mpl_links.js

*/
 // create variable that grabs all our select elements in our form
window.addEventListener("load",function(){
    var allSelect = document.getElementById("govLinks").querySelectorAll("select");

    //loop the items for a change to allow user to go there
	for (var i = 0; i < allSelect.length; i++) {
		allSelect[i].onchange = function(e){
			location.href = e.target.value;
		};
	}
});
