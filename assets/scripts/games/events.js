'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onStartGame = event => {
  event.preventDefault() // prevents refresh

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const findValue = game => {
  if (game.player_x !== null) {
    return 'x'
  } else if (game.player_o !== null) {
    return 'o'
  }
}

const onSelectSquare = event => {
  event.preventDefault() // prevents refresh

  const cellID = event.target.id // returns cell# clicked
  const currentGame = store.user.currentGame // returns game obj
  const currentValue = findValue(currentGame) // returns 'x' or 'o'

  const data = {
    'game': {
      'cell': {
        'index': cellID,
        'value': currentValue
      },
      'over': false
    }
  }
  // console.log(data)

  api.selectSquare(data)
    .then(ui.onSelectSquareSuccess)
    .catch(ui.onSelectSquareFailure)
}

module.exports = {
  onStartGame,
  onSelectSquare
}
/*
data: {
  'game': {
    'cell': {
      'index': 0,
      'value': 'YOU DID IT!'
    },
    'over': false
  }
} */
