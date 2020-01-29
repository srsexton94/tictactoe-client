'use strict'

const authEvents = require('FILEPATH EVENTS')
const OTHERFILE? = require('FILEPATH OTHER')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#game-start').on('submit', OTHERFILE?.onStartGame)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
// add event handler(s?) for play space selecting
