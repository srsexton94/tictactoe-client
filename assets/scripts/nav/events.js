'use strict'

const signUpNav = () => {
  event.preventDefault()
  $('#title-page').addClass('hidden')
  $('#sign-up').removeClass('hidden')
}
const signInNav = () => {
  event.preventDefault()
  $('#title-page').addClass('hidden')
  $('#sign-in').removeClass('hidden')
}
const changePWNav = () => {
  event.preventDefault()
  $('#game').addClass('hidden')
  $('#change-password').removeClass('hidden')
}
const upToIn = () => {
  event.preventDefault()
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
}
const inToUp = () => {
  event.preventDefault()
  $('#sign-in').addClass('hidden')
  $('#sign-up').removeClass('hidden')
}
const signUpHome = () => {
  event.preventDefault()
  $('#sign-up').addClass('hidden')
  $('#title-page').removeClass('hidden')
}
const signInHome = () => {
  event.preventDefault()
  $('#sign-in').addClass('hidden')
  $('#title-page').removeClass('hidden')
}
const changePWReturn = () => {
  event.preventDefault()
  $('#change-password').addClass('hidden')
  $('#game').removeClass('hidden')
}

module.exports = {
  signUpNav,
  signInNav,
  changePWNav,
  upToIn,
  inToUp,
  signUpHome,
  signInHome,
  changePWReturn
}
