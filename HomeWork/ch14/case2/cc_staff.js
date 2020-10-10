"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 2

    Author: Caleb Johnson
    Date: 03/01/2020 
   
   Filename: cc_staff.js
   
      
*/


/* Constructor function for the employee class */
function employee(id, firstName, lastName, dept, position, email, phone, photo) {
   this.id = id;
   this.firstName = firstName;
   this.lastName = lastName;
   this.dept = dept;
   this.position = position;
   this.email = email;
   this.phone = phone;
   this.photo = photo;
}

/* Object literal for search results */
var searchResult = {
   employees : [],
   sortById : function() {
      this.employees.sort(function(a,b) {
         if (a.id < b.id) {return -1;}
         else {return 1;}
      });
   }
};


/* Event listener to retrieve and display employee records matching the search condition */
var getTable = document.getElementById("tableBody");
document.getElementById("searchButton").addEventListener("click", function() {
   var tableBody = document.querySelector("table#staffTable tbody");
   var tableCaption = document.querySelector("table#staffTable caption");
    
    //reset previous data
    tableBody.removeChildren();
    searchResult.employees = [];
    
    staff.directory.forEach(function(record) {
        
        //grab our labels from html
        var nameSearch = document.getElementById("nameSearch").value;
        var nameSearchType = document.getElementById("nameSearchType").selectedValue();
        
        switch(nameSearchType) {
            case "contains": var nameRegExp = new RegExp(nameSearch, "i"); break;
            case "beginsWith": var nameRegExp = new RegExp("^" + nameSearch, "i"); break;
            case "exact": var nameRegExp = new RegExp("^" + nameSearch + "$", "i"); break;
        }
        
		var foundName = nameRegExp.test(record.lastName);
		
		var positionSearch = document.getElementById("positionSearch").value;
		var positionSearchType = document.getElementById("positionSearchType").selectedValue();
		
		switch (positionSearchType) {
            case "contains": var positionRegExp = new RegExp(positionSearch, "i"); break;
            case "beginsWith": var positionRegExp = new RegExp("^" + positionSearch, "i"); break;
            case "exact": var positionRegExp = new RegExp("^" + positionSearch + "$", "i"); break;
        }
        
        //testing for a position
        var foundPosition = positionRegExp.test(record.position);
        
        var deptSearch = document.getElementById("deptSearch").selectedValue();
        if(deptSearch === "" || deptSearch === record.dept) {
            var foundDept = true;
        }
        ///////
        if (foundName && foundPosition && foundDept) {
            searchResult.employees.push(new employee(
                record.id, 
                record.firstName, 
                record.lastName, 
                record.dept,
                record.position, 
                record.email, 
                record.phone, 
                record.photo
                ));
        }
	});
	
	//change caption to # of records found
	tableCaption.textContent = searchResult.employees.length + " records found";
	searchResult.sortById();
	
	//fill our table with matching employees
	searchResult.employees.forEach(function(record) {
        tableBody.innerHTML +=
        "<tr>"+
        "<td><img src='"+record.photo+"' /></td>"+
        "<td>"+record.firstName+" "+record.lastName+"</td>"+
        "<td>"+record.dept+"</td>"+
        "<td>"+record.position+"</td>"+
        "<td><a href='mailto:"+record.email+"'>"+record.email+"</a></td>"+
        "<td><a href='tel:"+record.phone+"'>"+record.phone+"</a></td>"+
        "</tr>";
        
	});
});

/* --- Methods added to native objects ---*/

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function() {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};


