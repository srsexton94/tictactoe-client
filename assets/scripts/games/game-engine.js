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

const gameWin = xo => {
  $('#gameboard-message').text(`${xo} wins! Congrats - play again!`).addClass('success')
  $('.square').addClass('game-disable')

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
  // initializes empty array to push chunked subarrays to
  const coordinates = []

  // chunks gameboard into multidimensional array
  // indices represent the coordinate location of cell
  while (gameboard.length > 0) {
    coordinates.push(gameboard.splice(0, 3))
  }

  const xSpots = []
  const oSpots = []
  // pushes coordinate pairs for each players choices to the arrays above
  for (let i = 0; i < coordinates.length; i++) {
    for (let e = 0; e < coordinates[i].length; e++) {
      const cell = coordinates[i][e]
      if (cell === 'x') {
        xSpots.push([i, e])
      } else if (cell === 'o') {
        oSpots.push([i, e])
      }
    }
  }
  // if a player just went check if they won
  if (xSpots.length > oSpots.length) {
    if (win.checkWin(xSpots)) {
      gameWin('X')
    } else {
      gameContinue()
    }
  } else if (oSpots.length === xSpots.length) {
    if (win.checkWin(oSpots)) {
      gameWin('O')
    } else {
      gameContinue()
    }
  }
}

module.exports = {
  gameEngine
}
