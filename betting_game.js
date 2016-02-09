var bettingGame = function() {
  var playerBank = 100; 
  alert("Your starting bank is 100.");
  while(playerBank > 0) {
    playerBet = prompt("What is your bet? (Choose 5 or 10)");
    playerBet = parseInt(playerBet, 10);
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    // alert(randomNumber);
    playerGuess = prompt("Guess a number between 1 and 10");
    if(playerGuess === randomNumber) {
      playerBank += playerBet;
      alert("Hooray you win ur bet!");
      alert("Your bank is now at " + playerBank);
    } 
    else if(playerGuess === randomNumber + 1){
      alert("Oof! Off by one. Your bank is secure at " + playerBank);
    }
    else if(playerGuess === randomNumber - 1) {
      alert("Ssssssso close! Your bank remains the same at " + playerBank);
    } else {
      playerBank -= playerBet;
      alert("Oops you lose the moneys!");
      alert("Your bank is now at " + playerBank);
    }
  }
}

bettingGame();