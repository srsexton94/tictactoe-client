'use strict'

const config = require('../config')
const store = require('../store')

const startGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

/* const selectSquare = data => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + data.game.id,
    data
  })
} */

module.exports = {
  startGame
  // selectSquare
}

// for reference
/*
const varName = data => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' [+ data.game.id],
    data
  })
}
*/
