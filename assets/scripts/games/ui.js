'use strict'

const store = require('./../store')
const game = require('./game-engine')

const onStartGameSuccess = response => {
  // pushes current game to User's game array
  store.user.currentGame = response.game
  store.user.games.push(response.game)

  // add success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')

  // removes success message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const onStartGameFailure = response => {
  // failure message
  $('#gameboard-message').text('Our Apologies, that didn\'t work. Please Try again.').addClass('failure')

  // removes failure message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('failure')
  }, 5000)
}

const onSelectSquareSuccess = response => {
  // calls main game function
  // game.switchPlayers(response)
  game.gameEngine(response)

  // success message
  $('#gameboard-message').text('Good move!').addClass('success')

  // removes failure message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const onSelectSquareFailure = response => {
  // failure message
  $('#gameboard-message').text('Our Apologies, that didn\'t work. Please Try again.').addClass('failure')

  // removes failure message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('failure')
  }, 5000)
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onSelectSquareSuccess,
  onSelectSquareFailure
}
