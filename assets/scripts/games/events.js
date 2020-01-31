'use strict'
const api = require('./api')
const ui = require('./ui')

const onStartGame = event => {
  event.preventDefault() // prevents refresh

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

// for stretch goal: to input playtoken options return an object
// that can access x or o for the data, but also access the token
// to be displayed, as different key/value pairs

let checkTurn = true // declares checker globally so it can be altered by switchPlayers
const switchPlayers = () => {
  let currentValue

  if (checkTurn) {
    currentValue = 'x'
  } else {
    currentValue = 'o'
  }
  checkTurn = !checkTurn
  return currentValue
}

const onSelectSquare = event => {
  event.preventDefault() // prevents refresh

  const cellID = event.target.id // returns cell# clicked
  const currentValue = switchPlayers() // alternates & returns 'x' and 'o'

  $(`#${cellID}`).text(`${currentValue}`)

  const data = {
    'game': {
      'cell': {
        'index': cellID,
        'value': currentValue
      },
      'over': false
    }
  }

  api.selectSquare(data)
    .then(ui.onSelectSquareSuccess)
    .catch(ui.onSelectSquareFailure)
}

module.exports = {
  onStartGame,
  onSelectSquare
}
