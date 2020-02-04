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

const gameEnd = (winner) => {
  if (winner) { // if a winner is passed, display success message with winner
    $('#gameboard-message').text(`${winner} wins! Congrats - play again!`).addClass('success')
  } else { // if no winner, display message declaring tie
    $('#gameboard-message').text('It\'s a tie! Please play again').addClass('success')
  }
  $('.square').addClass('game-disable') // disables gameboard actions
  $('.endgame').addClass('disable') // disables action on all but "new game"

  setTimeout(() => { // removes success message after 8 seconds
    $('#gameboard-message').text('').removeClass('success')
  }, 8000)
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
    gameEnd('X')
  } else if (win.checkWin(oSpots)) { // if O has a win, O wins!
    gameEnd('O')
  } else if (xSpots.length === 5) { // otherwise, if X reaches 5 plays, its a tie
    gameEnd()
  } else { // if no one wins, and its not yet a tie, continue playing!
    gameContinue()
  }
}

module.exports = {
  gameEngine
}
