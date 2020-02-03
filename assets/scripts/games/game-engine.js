'use strict'

const store = require('./../store')
const win = require('./win')

const gameContinue = () => {
  // Adds success message above gameboard
  $('#gameboard-message').text('Good move!').addClass('success')

  setTimeout(() => { // removes success message after 5 seconds
    $('#gameboard-message').text('').removeClass('success')
  }, 1500)
}

const gameTie = () => {
  // Displays "tie" message above gameboard
  $('#gameboard-message').text('It\'s a tie! Please play again').addClass('failure')
  $('.square').addClass('game-disable') // disables gameboard actions
  $('.endgame').addClass('disable') // disables action on all but "new game"

  setTimeout(() => { // removes failure message after 5 seconds
    $('#gameboard-message').text('').removeClass('failure')
  }, 5000)
}

const gameWin = xo => {
  // Displays congratulatory message, identifying winner, above gameboard
  $('#gameboard-message').text(`${xo} wins! Congrats - play again!`).addClass('success')
  $('.square').addClass('game-disable') // disables gameboard actions
  $('.endgame').addClass('disable') // disables action on all but "new game"

  setTimeout(() => { // removes success message after 5 seconds
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const gameEngine = response => {
  // updates stored current game to match API response
  store.user.currentGame.cells = response.game.cells
  // clones the stored current game to use cell array without mutating original
  const gameboard = [...store.user.currentGame.cells]

  // initializes empty arrays to later push each player's spot choices
  const xSpots = []
  const oSpots = []

  // for each spot of the gameboard, this block pushes the index# of 'x' or 'o'
  // to the appropriate 'spots' array
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === 'x') {
      xSpots.push(i)
    } else if (gameboard[i] === 'o') {
      oSpots.push(i)
    }
  }

  if (win.checkWin(xSpots)) { // if X has a winning combo, X wins!
    gameWin('X')
  } else if (win.checkWin(oSpots)) { // if O has a win, O wins!
    gameWin('O')
  } else if (xSpots.length === 5) { // otherwise, if X reaches 5 plays, its a tie
    gameTie()
  } else { // if no one wins, and its not yet a tie, continue playing!
    gameContinue()
  }
}

module.exports = {
  gameEngine
}
