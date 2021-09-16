console.log('Lodash is loaded:', typeof _ !== 'undefined');

var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

var cardFullDeck = [];
var players = [{
  name: 'player 1',
  hand: [],
  point: 0
}, {
  name: 'player 2',
  hand: [],
  point: 0
}, {
  name: 'player 3',
  hand: [],
  point: 0
}, {
  name: 'player 4',
  hand: [],
  point: 0
}
];
var temp = {};
for (var i = 0; i < cardSuit.length; i++) {
  for (var j = 0; j < cards.length; j++) {
    temp.card = cards[j] + ' of ' + cardSuit[i];
    if (!isNaN(parseInt(cards[j]))) {
      temp.cardValue = parseInt(cards[j]);
    } else {
      if (cards[j] === 'Ace') {
        temp.cardValue = 11;
      } else {
        temp.cardValue = 10;
      }
    }
    cardFullDeck.push(temp);
    temp = {};
  }
}

var shuffleDeck = _.shuffle(cardFullDeck);

var playersCount = players.length;
var currentCard = {};
var currentCounter = 0;
for (var k = 0; k < players.length * 2; k++) {
  if (currentCounter === playersCount) {
    currentCounter = 0;
  }
  currentCard = shuffleDeck.pop();
  players[currentCounter].hand.push(currentCard.card);
  players[currentCounter].point += currentCard.cardValue;
  currentCard = {};
  currentCounter++;
}

var highestScore = 0;
var highestScorePlayer = 0;
var isDrew = false;
for (var l = 0; l < players.length; l++) {
  if (players[l].point === highestScore) {
    isDrew = true;
  } else if (players[l].point > highestScore) {
    highestScore = players[l].point;
    highestScorePlayer = l;
  }
}
console.log(players);
if (isDrew === false) {
  console.log(players[highestScorePlayer].name + ' is the winner!');
} else {
  console.log('Its a Drew');
}

// create list of card type
// create list of addition card face
// create cardsInfo object with to list card Deck and card used
// create object for four players
// create temp object
// go through each type of card
// go through number 2 to 10
// assign rank property of temp object current number
// assign current suit to the suit property of temp object
// assign current number to the cardvalue propert of temp object
// add current temp object to the list of cardDeck
// empty the temp object
// check if the number is 10
//      if yes go through each element of the additioncard element
//      assign rank property of temp object current addition card
//      assign current suit to the suit property of temp object
//      check if the current additional card is 'Ace'
//            if yes add assign 11 to the cardvalue propert of temp object
//      else
//            assign 11 to the cardvalue propert of temp object
// create function to distribure cards
// go through each player
// get random numer from 0 to 51 and store it to the variable
// check if current random number is not used before
//      if yes add current random number to the cardused list
//      get the card suit and card rank of current number and add it to the hands list of players object
//      get point of current number and add current point with previos
// else
//      decrement the counter
// call function 2 times
// create a variable to store highscore, hignscore player location
// create boolean for checking if its drew or not
// go through each players point
// check if current point is same as previous point
//      if yes change isDrew boolean value to true
// else check if the current point is higher then previus point
//      if yes assign current point value to the highscore
//      assign current player no to hignscore player variable
// check if its drew is false()
//      if yes console log the player name
// else
//      console log 'its drew'
