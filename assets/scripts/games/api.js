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
    data: {}
  })
}

const selectSquare = data => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.user.currentGame.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  startGame,
  selectSquare
}
