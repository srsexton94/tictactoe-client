'use strict'

const store = require('./../store')

// declares this externally in case we want to offer multiple game sizes
// NOTE: hard code it into the splice method if not attempting that stretch goal
const gameSize = 3

const gameEngine = response => {
  // updates stored current game to match API response
  store.user.currentGame.cells = response.game.cells
  // clones the stored current game to use cell array without mutating
  const gameboard = [...store.user.currentGame.cells]
  // initializes empty array to push chunked subarrays to
  const coordinates = []

  // chunks gameboard into multidimensional array
  // indices represent the coordinate location of cell
  while (gameboard.length > 0) {
    coordinates.push(gameboard.splice(0, gameSize))
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
  // console.log('xSpots: ', xSpots)
  // console.log('oSpots: ', oSpots)
  // console.log('coordinates: ', coordinates)
  // console.log('gameboard: ', gameboard)
  // console.log('currentGame.Cells: ', store.user.currentGame.cells)
}

module.exports = {
  gameEngine
}
