'use strict'

const store = require('./../store')
const win = require('./win')

const gameContinue = () => {
  // success message
  $('#gameboard-message').text('Good move!').addClass('success')

  // removes success message after 5 seconds
  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 1500)
}

const gameTie = () => {
  $('#gameboard-message').text('It\'s a tie! Please play again').addClass('failure')
  $('.square').addClass('game-disable')
  $('.endgame').addClass('disable')

  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const gameWin = xo => {
  $('#gameboard-message').text(`${xo} wins! Congrats - play again!`).addClass('success')
  $('.square').addClass('game-disable')
  $('.endgame').addClass('disable')

  setTimeout(() => {
    $('#gameboard-message').text('').removeClass('success')
  }, 5000)
}

const gameEngine = response => {
  // updates stored current game to match API response
  store.user.currentGame.cells = response.game.cells
  // clones the stored current game to use cell array without mutating original
  const gameboard = [...store.user.currentGame.cells]
  console.log(gameboard)

  const xSpots = []
  const oSpots = []

  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === 'x') {
      xSpots.push(i)
    } else if (gameboard[i] === 'o') {
      oSpots.push(i)
    }
  }

  if (win.checkWin(xSpots)) {
    gameWin('X')
  } else if (win.checkWin(oSpots)) {
    gameWin('O')
  } else if (xSpots.length === 5) {
    gameTie()
  } else {
    gameContinue()
  }

}

module.exports = {
  gameEngine
}
