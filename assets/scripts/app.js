'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // authentication events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changepassword-button').on('click', () => {
    event.preventDefault()
    $('#change-password').removeClass('hidden')
    $('#game').addClass('hidden')
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
  $('#game-start').on('submit', gameEvents.onStartGame)
  $('#game-start').on('submit', gameEvents.onGetGames)
  $('.square').on('click', gameEvents.onSelectSquare)
  $('#new-game').on('click', gameEvents.onStartGame)
  $('#pause').on('click', () => {
    $('.square').addClass('game-disable')
    $('.paused').addClass('disable')
  })
  $('#resume').on('click', () => {
    $('.square').removeClass('game-disable')
    $('.paused').removeClass('disable')
  })
})
