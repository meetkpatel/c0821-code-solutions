console.log('Lodash is loaded:', typeof _ !== 'undefined');

var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
var additionalCard = ['Jack', 'Queen', 'King', 'Ace'];

var cardsInfo = {
  cardsDeck: [],
  cardUsed: []
};

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
  for (var j = 2; j <= 10; j++) {
    temp.rank = j;
    temp.suit = cardSuit[i];
    temp.cardValue = j;
    cardsInfo.cardsDeck.push(temp);
    temp = {};
    if (j === 10) {
      for (var k = 0; k < additionalCard.length; k++) {
        temp.rank = additionalCard[k];
        temp.suit = cardSuit[i];
        if (additionalCard[k] === 'Ace') {
          temp.cardValue = 11;
        } else {
          temp.cardValue = 10;
        }
        cardsInfo.cardsDeck.push(temp);
        temp = {};
      }
    }
  }
}
shuffleDistribution();
shuffleDistribution();

function shuffleDistribution() {
  for (var l = 0; l < players.length; l++) {
    var randomNo = Math.floor(Math.random() * (51 - 0 + 1) + 0);
    if (cardsInfo.cardUsed.indexOf(randomNo) === -1) {
      cardsInfo.cardUsed.push(randomNo);
      players[l].hand.push(cardsInfo.cardsDeck[randomNo].rank + ' of ' + cardsInfo.cardsDeck[randomNo].suit);
      players[l].point += cardsInfo.cardsDeck[randomNo].cardValue;
    } else {
      l--;
    }
  }
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
