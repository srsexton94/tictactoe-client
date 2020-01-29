'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('FILEPATH') // need to add filepath!

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#game-start').on('submit', gameEvents.onStartGame)
  $('.square').on('submit', gameEvents.onSelectSquare)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
// add event handler for contact form?
