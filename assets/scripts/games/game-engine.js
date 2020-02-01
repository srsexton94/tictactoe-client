'use strict'

const store = require('./../store')
const win = require('./win')

const checkWin = spots => {
  if (spots.length === 3) {
    win.inaRow(spots)
  } if (spots.length === 4) {
    // switch statement: 4 options
  } if (spots.length === 5) {
    // switch statment: 10 options
  }
}

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
  // pushes the coordinate pairs for each players choice to the initialized arrays above
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

  // if a player just went and has 3 or more choices, check if they won
  if (xSpots.length > oSpots.length && xSpots.length >= 3) {
    checkWin(xSpots)
  } else if (oSpots.length === xSpots.length && oSpots.length >= 3) {
    checkWin(oSpots)
  }

  console.log('xSpots: ', xSpots)
  console.log('oSpots: ', oSpots)
  // console.log('coordinates: ', coordinates)
  // console.log('gameboard: ', gameboard)
  // console.log('currentGame.Cells: ', store.user.currentGame.cells)
}

module.exports = {
  gameEngine
}
