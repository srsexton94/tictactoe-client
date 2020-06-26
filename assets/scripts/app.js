'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
const navEvents = require('./nav/events')

$(() => {
  // navigation events
  $('#signup-nav').on('click', navEvents.signUpNav)
  $('#signin-nav').on('click', navEvents.signInNav)
  $('#changepassword-nav').on('click', navEvents.changePWNav)
  $('#signup-to-signin').on('click', navEvents.upToIn)
  $('#signin-to-signup').on('click', navEvents.inToUp)
  $('#signup-home').on('click', navEvents.signUpHome)
  $('#signin-home').on('click', navEvents.signInHome)
  $('#changepassword-return').on('click', navEvents.changePWReturn)

  // authentication events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#guest-signin').on('click', authEvents.onGuestSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('click', authEvents.onSignOut)

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
