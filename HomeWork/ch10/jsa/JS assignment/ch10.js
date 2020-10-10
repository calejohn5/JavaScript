    "use strict";
    /*
		Ch10 assignment

		Author: Caleb Johnson
		Date: 1/30/2020
	*/

//arrays to hold necessary values
var studName = ["Joe", "Doug", "Braynt", "Ryan", "Jess", "Abbie", "Richard", "Tina", "Heather", "Peter"];
var studScore = ["20,54,13,98,65,32,87,65,90,76"];
var meow = 3, yes = "<table><tr>";

    for (var i =0; i < studName.length; i++){
        yes += "<td>" + studName[i] + "</td>";
        
        var rowTwo = i+1;
        if (rowTwo%meow === 0 && rowTwo != studName.length) {
            yes += "</tr><tr>";
        }
    }
  yes += "</tr></table>";

  document.getElementById("aTable").innerHTML = yes;
