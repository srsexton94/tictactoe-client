'use strict'

const store = require('./../store')
const game = require('./game-engine')
// const events = require('./events')

const onStartGameSuccess = response => {
  // pushes current game to User's game array
  store.user.currentGame = response.game
  store.user.games.push(response.game)

  // removes any text on game spaces and any disabled actions
  $('.square').text('').removeClass('game-disable')
  $('.paused').removeClass('disable')
  $('#resume').removeClass('disable')

  // adds success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')

  setTimeout(() => { // removes success message after 5 seconds
    $('#gameboard-message').text('').removeClass('success')
    $('#game-board').removeClass('hidden')
    $('#game-start').addClass('hidden')
  }, 1000)
}

const onStartGameFailure = response => {
  // adds failure message above gameboard
  $('#gameboard-message').text('Our Apologies, that didn\'t work. Please Try again.').addClass('failure')

  setTimeout(() => { // removes failure message after 5 seconds
    $('#gameboard-message').text('').removeClass('failure')
  }, 5000)
}

const onSelectSquareSuccess = response => {
  game.gameEngine(response) // calls main game function
}

const onSelectSquareFailure = response => {
  // adds failure message above gameboard
  $('#gameboard-message').text('Our Apologies, that didn\'t work. Please Try again.').addClass('failure')

  setTimeout(() => { // removes failure message after 5 seconds
    $('#gameboard-message').text('').removeClass('failure')
  }, 5000)
}

const onGetGamesSuccess = response => { // displays game tally upon mouse hover
  $('#game-tally').text(`You've played ${response.games.length} games. Great job, keep playing!`)
}

const onGetGamesFailure = response => {
  // adds failure message in place of game tally
  $('#game-tally').text('Apologies, could not retrieve game tally.').addClass('failure')

  setTimeout(() => { // removes failure message after 5 seconds
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
