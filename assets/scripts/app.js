'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // navigation events
  $('#signup-nav').on('click', () => {
    event.preventDefault()
    $('#title-page').addClass('hidden')
    $('#sign-up').removeClass('hidden')
  })
  $('#signin-nav').on('click', () => {
    event.preventDefault()
    $('#title-page').addClass('hidden')
    $('#sign-in').removeClass('hidden')
  })
  $('#changepassword-nav').on('click', () => {
    event.preventDefault()
    $('#change-password').removeClass('hidden')
    $('#game').addClass('hidden')
  })
  $('#signup-to-signin').on('click', () => {
    event.preventDefault()
    $('#sign-up').addClass('hidden')
    $('#sign-in').removeClass('hidden')
  })
  $('#signin-to-signup').on('click', () => {
    event.preventDefault()
    $('#sign-in').addClass('hidden')
    $('#sign-up').removeClass('hidden')
  })
  $('#signup-home').on('click', () => {
    event.preventDefault()
    $('#sign-up').addClass('hidden')
    $('#title-page').removeClass('hidden')
  })
  $('#signin-home').on('click', () => {
    event.preventDefault()
    $('#sign-in').addClass('hidden')
    $('#title-page').removeClass('hidden')
  })
  // authentication events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
  $('#game-start').on('submit', gameEvents.onStartGame)
  $('#game-start').on('submit', gameEvents.onGetGames)
  $('.square').on('click', gameEvents.onSelectSquare)
  $('#new-game').on('click', gameEvents.onStartGame)
  $('#new-game').on('click', gameEvents.onGetGames)
  $('#pause').on('click', () => {
    $('.square').addClass('game-disable')
    $('.paused').addClass('disable')
  })
  $('#resume').on('click', () => {
    $('.square').removeClass('game-disable')
    $('.paused').removeClass('disable')
  })
})
