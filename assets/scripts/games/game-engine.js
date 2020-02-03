'use strict'

const store = require('./../store')
const win = require('./win')
// const ui = require('./ui')

const gameEngine = response => {
  // updates stored current game to match API response
  store.user.currentGame.cells = response.game.cells
  // clones the stored current game to use cell array without mutating original
  const gameboard = [...store.user.currentGame.cells]
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
  // if a player just went and has 3 or more spots chosen, check if they won
  if (xSpots.length > oSpots.length && xSpots.length >= 3) {
    if (win.checkWin(xSpots)) {
      console.log('x wins')
    }
  } else if (oSpots.length === xSpots.length && oSpots.length >= 3) {
    if (win.checkWin(oSpots)) {
      console.log('o wins')
    }
  }
}

module.exports = {
  gameEngine
}
