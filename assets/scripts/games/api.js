'use strict'

const config = require('../config')

const getGameTally = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games'
  })
}

const startGame = data => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data
  })
}

const restartGame = data => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data.game.id
  })
}

const selectSquare = data => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + data.game.id,
    data
  })
}

module.exports = {
  getGameTally,
  startGame,
  restartGame,
  selectSquare
}
