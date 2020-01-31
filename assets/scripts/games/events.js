'use strict'
const api = require('./api')
const ui = require('./ui')

const onStartGame = event => {
  event.preventDefault() // prevents refresh

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

let checkTurn = true // declares checker globally so it can be altered by switchPlayers
const switchPlayers = () => {
  let currentValue

  if (checkTurn) { // checks which turn it is
    currentValue = 'x'
  } else {
    currentValue = 'o'
  }
  checkTurn = !checkTurn // alternates checker
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
