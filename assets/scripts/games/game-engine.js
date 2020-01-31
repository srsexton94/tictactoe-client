'use strict'

const store = require('./../store')
/* response ala
{
game:
id: 5476
cells: (9) ["", "", "", "", "x", "", "", "", ""]
over: false
player_x: {id: 325, email: "billy@gmail.com"}
player_o: null
}

const switchPlayers = response => {
  const currentGame = store.user.currentGame // assigns it to a variable for ease of use
  console.log('before switchPlayers: ', currentGame)

  if (currentGame.player_x !== null) {
    currentGame.player_o = currentGame.player_x
    currentGame.player_x = null
    console.log('it was player x and now: ', currentGame)
  } else {
    currentGame.player_x = currentGame.player_o
    currentGame.player_o = null
    console.log('it was player o and now: ', currentGame)
  }
}
*/

const gameEngine = response => {
  // updates stored currentGame cells key to take response's value
  // store.user.currentGame.cells = response.game.cells
  console.log('in empty gameEngine: ', store.user.currentGame)
}

module.exports = {
  gameEngine
}
