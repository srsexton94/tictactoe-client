'use strict'

const store = require('./../store')
const game = require('./game-engine')

const onStartGameSuccess = response => {
  // pushes current game to User's game array
  store.user.currentGame = response.game
  store.user.games.push(response.game)

  // removes any text on game spaces
  $('.square').text('')

  // add success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')

  // removes success message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
    $('#player-panels').removeClass('hidden')
    $('#game-board').removeClass('hidden')
    $('#game-start').addClass('hidden')
  }, 2500)
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
  game.gameEngine(response)

  // success message
  $('#gameboard-message').text('Good move!').addClass('success')

  // removes success message after 5 seconds
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

const onGetGamesSuccess = response => {
  // displays game tally upon mouse hover
  $('#game-tally').text(`Congrats! You've played ${response.games.length} games. Great job, keep playing!`)
}

const onGetGamesFailure = response => {
  console.log('failed')
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onSelectSquareSuccess,
  onSelectSquareFailure,
  onGetGamesSuccess,
  onGetGamesFailure
  // continuePlaying,
  // onWin
}
