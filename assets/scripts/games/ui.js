'use strict'

// const store = require('./../store.js')

const onStartGameSuccess = response => {
  // add success message above gameboard
  $('#gameboard-message').text('Let\'s Play!').addClass('success')
}

module.exports = {
  onStartGameSuccess
}
