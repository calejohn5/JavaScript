"use strict";

/*
	Chapter 12
	Author: Caleb Johnson
	Date:   2/15/2020
*/
window.addEventListener('load', addStyles);


//1st assignment
var olNum = 3;
var liNum = 4;
var numNum = "content";

function varHTML(olNum, liNum, numNum){
    var olOne = document.getElementById(numNum);
    
    //create 3 ordered lists looping for olNum 
	for(var i = 0; i < olNum; i++) {
        var h = document.createElement("H3") ;
	    var listHeader = document.createTextNode("List # " + i);
		var olNew = document.createElement("ol");

            //use new variables to give HTML 3 OLs via numNum
        olNew.appendChild(listHeader);
        h.appendChild(listHeader);
        olOne.appendChild(olNew);
        
        //create 4 list items looping liNum 
        for (var x = 0; x < liNum; x++) {
		    var listDesc = document.createTextNode("The number is "+x);
		    var liNew = document.createElement("li");
		    
            //use new variables to give HTML 4 LIs via numNum
            liNew.appendChild(listDesc);
            olNew.appendchild(liNew);
            olNew.setAttribute("id", i + x);
        }
    }
}

// 2nd assignment
function addStyles() {
    var style = document.createElement("style");
	document.head.appendChild(style);
	style.addRule("backgroundColor=red");
    style.addRule("border = thin solid #black");
}

/* 
    I couldn't figure out how to get this to work correctly on my test HTML document, I'm going to try out a tutor to catch me up to speed on this.
    */