'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onStartGame = event => {
  event.preventDefault() // prevents refresh

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

/* const onSelectSquare = event => {
  event.preventDefault() // prevents refresh
  console.log('SELECTED!')
} */

module.exports = {
  onStartGame
  // onSelectSquare
}
