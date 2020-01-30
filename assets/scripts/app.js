'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('FILEPATH') // need to add filepath!

$(() => {
  // authentication events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
  $('#game-start').on('submit', gameEvents.onStartGame)
  $('.square').on('click', gameEvents.onSelectSquare)
})
