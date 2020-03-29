console.log("Up and running");
console.log("User flipped King")
console.log("User flipped Queen")
console.log("Sorry, Try Again.")


// var cards = ["queen","queen","king","king"];
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "memory-game/images/queen-of-hearts.png",
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "memory-game/images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "memory-game/images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "memory-game/images/king-of-diamonds.png"
  }
];


var cardsInPlay = [];

	var checkForMatch = function() {
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay [2] === cardsInPlay[3]) {
			alert("You found a match!");
		} 	else {
			alert("Sorry, Try Again.");
		}
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id')
	this.setAttribute('src', cards[cardId].cardImage)
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

var createBoard = function() {
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}



// reorganised from my last submission as my code wasnt working correctly.
// not seeing cards images or suits will try to reverse engineer fron next step.






// Notations to help me with syntax//
//if (condition) {
// Take this path when the condition is true!
//} else {
// Take the other path when the condition is false!
//}
//if (grade >= 90) {
//console.log("Student received an A.");
//} else if (grade >= 80) {
//console.log("Student received a B");
//}