$(document).ready(function() {
  var amount = 100;

  function updateBankAmt() {
    var bank = $('<p>')
      .text('Your current bank amount is $'+amount+'.')
      .addClass('bank-amount');
    bank.insertBefore($('.gambling'));
  }

  $('.start-game').one('click', function() {
    var test = $('div.game').children('p.bank-amount');
    if(test.length === 0) {
      updateBankAmt();
    }
    $(this).closest('.game').find('.gambling').show();
  });

  $('.guess').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var playerBet = $('.player-bet').val();
    playerBet = parseInt(playerBet, 10);
    var playerGuess = $('.player-guess').val();
    playerGuess = parseInt(playerGuess, 10);

    if(playerGuess === randomNumber) {
      amount += playerBet;
      $(this).closest('.game').find('.correct-guess').show()
      .fadeOut(1000);
    }
    else if(playerGuess === randomNumber + 1 || playerGuess === randomNumber - 1) {
      $(this).closest('.game').find('.almost-guess').show()
      .fadeOut(1000);
    }
    else {
      amount -= playerBet;
      $(this).closest('.game').find('.wrong-guess').show()
      .fadeOut(1000);
    }

    $('.bank-amount').remove();
    updateBankAmt();

    if(amount === 0) {
      $(this).closest('.game').find('.game-over').show();
      $(this).closest('.game').find('.restart').show();
      $(this).closest('.game').find('.gambling').hide();
      $('.restart').on('click', function() {
        amount = 100;
        $('.bank-amount').remove();
        updateBankAmt();
        $(this).closest('.game').find('.gambling').show();
        $('.game-over').hide();
        $(this).hide();
      });
    }
    
  });
});