let player ={
  name : "Nishan",
  chips : 200,
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message =" ";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = player.name +": $" +player.chips;

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13) + 1;
  if (randomNumber>10){
    return 10;
  }else if (randomNumber===1){
    return 11;
  }else {
    return randomNumber;
  }
}

function startGame(){
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard,secondCard,];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame(){
if (sum<=20){
  message="Do you want to draw a new card?😎";
  isAlive = true;

} else if (sum===21){
  message="Blackjack!!🥳";
  hasBlackJack = true;
  
  
} else{
  message="Fuck! You lost.👎";
  isAlive = false;
  
}
messageEl.textContent = message;
sumEl.textContent = "Sum: " + sum;
cardsEl.textContent ="Cards: ";
for (let i = 0; i<cards.length; i++){
  cardsEl.textContent += cards[i] + "-" ;
}
}

function newCard(){
  if(hasBlackJack===false && isAlive===true){
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}

