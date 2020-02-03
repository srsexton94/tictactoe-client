'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
const gameUI = require('./games/ui')

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
  $('.square').on('click', gameEvents.onSelectSquare)
  $('#new-game').on('click', gameEvents.onStartGame)
  $('#game-tally').on('click', gameEvents.onGetGames)
  $('#pause').on('click', () => {
    $('.square').addClass('game-disable')
    $('#changepassword-button').addClass('disable')
    $('#pause').addClass('disable')
    $('#new-game').addClass('disable')
    $('input').addClass('disable')
  })
  $('#resume').on('click', () => {
    $('.square').removeClass('game-disable')
    $('#changepassword-button').removeClass('disable')
    $('#pause').removeClass('disable')
    $('#new-game').removeClass('disable')
    $('input').removeClass('disable')
  })
})
