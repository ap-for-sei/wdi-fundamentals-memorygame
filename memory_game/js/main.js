console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log("User flipped " + cardOne);

var cardTwo = cards[1]
cardsInPlay.push(cards[1]);
console.log("User flipped " + cardTwo);

var cardThree = cards[2]
cardsInPlay.push(cards[2]);
console.log("User flipped " + cardThree);

var cardFour = cards[3]
cardsInPlay.push(cards[3]);
console.log("User flipped " + cardFour);

if (cardsInPlay.length === 2);
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else {
		alert("Sorry, try again.")
	};

if (cardsInPlay.length === 2);
	if (cardsInPlay[2] === cardsInPlay[3])
		alert("You found a match!");
	else {
		alert("Sorry, try again.")
	};