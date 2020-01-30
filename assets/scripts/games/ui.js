'use strict'

const store = require('./../store.js')

const onStartGameSuccess = response => {
  // pushes current game to User's game array
  store.user.games.push(response.game)

  // add success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')

  // removes success message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const onStartGameFailure = response => {
  $('#gameboard-message').text('Our Apologies, that didn\'t work. Please Try again.').addClass('failure')

}

const onSelectSquareSuccess = response => {
  $('#gameboard-message').text('Good move!').addClass('success')
}

const onSelectSquareFailure = response => {}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onSelectSquareSuccess,
  onSelectSquareFailure
}
