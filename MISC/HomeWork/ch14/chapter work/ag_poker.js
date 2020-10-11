"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Tutorial Case

    Author: Caleb Johnson
    Date: 03/01/2020
   
   Filename: ag_poker.js

*/
window.addEventListener("load", playDrawPoker);

function playDrawPoker(){
	var dealButton = document.getElementById("dealB");
	var drawButton = document.getElementById("drawB");
	var standButton = document.getElementById("standB");
	var resetButton = document.getElementById("resetB");
	var handValueText = document.getElementById("handValue");
	var betSelection = document.getElementById("bet");
	var bankBox = document.getElementById("bank");
	var cardImages = document.querySelectorAll("img.cardImg");

	pokerGame.currentBank = 500;
	pokerGame.currentBet = 25;
	
	var myDeck = new pokerDeck();
	myDeck.shuffle();
	
	var myHand = new pokerHand(5);
	
	bankBox.value = pokerGame.currentBank;
	
	betSelection.onchange = function(e){
		pokerGame.currentBet = parseInt(e.target.options[e.target.selectedIndex].value);
	}
	resetButton.addEventListener("click", function(){
		pokerGame.currentBank = 500;
		bankBox.value = pokerGame.currentBank;
		enableObj(dealButton);
		enableObj(betSelection);
		disableObj(drawButton);
		disableObj(standButton);
	});
	
	dealButton.addEventListener("click", function(){
		if (pokerGame.currentBank >= pokerGame.currentBet){
			handValueText.textContent = "";
			disableObj(dealButton);
			disableObj(betSelection);
			enableObj(drawButton);
			enableObj(standButton);
			bankBox.value = pokerGame.placeBet();
			
			if (myDeck.cards.length < 10){
				myDeck = new pokerDeck();
				myDeck.shuffle();
			}
			myDeck.dealTo(myHand);
			for (var i = 0; i < cardImages.length; i++){
				cardImages[i].src = myHand.cards[i].cardImage();
				
				cardImages[i].index = i;
				cardImages[i].onclick = function(e){
					if (e.target.discard !== true){
						e.target.discard = true;
						e.target.src = "ag_cardback.png";
					} else {
						e.target.discard = false;
						e.target.src = myHand.cards[e.target.index].cardImage();
					}
				};
			}
		} else {
			alert("reduce the size of your bet");
		}
	});
	drawButton.addEventListener("click", function(){
		enableObj(dealButton);
		enableObj(betSelection);
		disableObj(drawButton);
		disableObj(standButton);
		
		for(var i = 0; i < cardImages.length; i++){
			if(cardImages[i].discard){
				myHand.cards[i].replaceFromDeck(myDeck);
				cardImages[i].src = myHand.cards[i].cardImage();
				cardImages[i].discard = false;
			}
			cardImages[i].onclick = null;
		}
		handValueText.textContent = myHand.handType();
		bankBox.value = pokerGame.payout(myHand.handOdds());
	});
	standButton.addEventListener("click", function(){
		enableObj(dealButton);
		enableObj(betSelection);
		disableObj(drawButton);
		disableObj(standButton);
		
		handValueText.textContent = myHand.handType();
		bankBox.value = pokerGame.payout(myHand.handOdds());
	});

	function disableObj(obj){
		obj.disabled = true;
		obj.style.opacity = 0.25;
	}
	
	function enableObj(obj){
		obj.disabled = false;
		obj.style.opacity = 1;
	}
}
