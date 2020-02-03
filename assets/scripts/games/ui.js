'use strict'

const store = require('./../store')
const game = require('./game-engine')

const onStartGameSuccess = response => {
  // pushes current game to User's game array
  store.user.currentGame = response.game
  store.user.games.push(response.game)

  // removes any text on game spaces
  $('.square').text('').removeClass('game-disable')
  $('.paused').removeClass('disable')
  $('#resume').removeClass('disable')

  // add success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')

  // removes success message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
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
  $('#game-tally').text(`You've played ${response.games.length} games. Great job, keep playing!`)
}

const onGetGamesFailure = response => {
  $('#game-tally').text('Apologies, could not retrieve game tally.').addClass('failure')

  setTimeout(() => {
    $('#game-tally').text('').removeClass('failure')
  }, 5000)
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onSelectSquareSuccess,
  onSelectSquareFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
