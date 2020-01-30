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

const selectSquare = () => {
  // console.log(store.user.games)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startGame,
  selectSquare
}

// for reference
/*
{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}
*/
