'use strict'

const store = require('./../store.js')
const gameEvents = require('./../games/events')

const onSignUpSuccess = response => {
  // add success message in signup form
  $('#signup-message').text(`${response.user.username} successfully signed up`).addClass('success')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => { // removes success message after 5 seconds
    $('#signup-message').text('').removeClass('success')
  }, 5000)
}

const onSignUpFailure = response => {
  // add failure message in signup form
  $('#signup-message').text('Sorry, sign up unsuccessful.').addClass('failure')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 5 seconds
    $('#signup-message').text('').removeClass('failure')
  }, 5000)
}

const onSignInSuccess = response => {
  // add success message in signin form
  $('#signin-message').text(`Welcome ${response.user.email}`).addClass('success')

  $('#sign-in').trigger('reset') // clears the form

  // removes success message, hides the signin/up forms, and reveals
  // the game start page; after 1 second
  setTimeout(() => {
    $('#signin-message').text('').removeClass('success')
    $('#auth').addClass('hidden')
    $('#game').removeClass('hidden')
  }, 1000)

  // stores the response data in 'store.js' to access authentication token later
  store.user = response.user
  store.user.games = []
}

const onSignInFailure = response => {
  // add success message in signin form
  $('#signin-message').text('Email or password incorrect, Please try again.').addClass('failure')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('').removeClass('failure')
  }, 5000)
}

const onChangePasswordSuccess = response => {
  // add success message in changepassword form
  $('#changepassword-message').text('Password changed successfully.').addClass('success')

  $('#change-password').trigger('reset') // clears the form

  // removes success message, hides the change password form, and returns to the
  // gameboard in 1 second
  setTimeout(() => {
    $('#changepassword-message').text('').removeClass('success')
    $('#change-password').addClass('hidden')
    $('#game').removeClass('hidden')
  }, 1000)
}

const onChangePasswordFailure = response => {
  // add success message in changepassword form
  $('#changepassword-message').text('Password update failed, Please try again.').addClass('failure')

  $('#change-password').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 5 seconds
    $('#changepassword-message').text('').removeClass('failure')
  }, 5000)
}

const onSignOutSuccess = response => {
  // add success message in signout form
  $('#signout-message').text(`Goodbye!`).addClass('success')

  $('#sign-out').trigger('reset') // clears the form

  // clears the success message, reveals the signin/up forms, hides the game and
  // the game board; in 2 seconds
  setTimeout(() => {
    $('#signout-message').text('').removeClass('success')
    $('#auth').removeClass('hidden')
    $('#game').addClass('hidden')
    $('#game-board').addClass('hidden')
  }, 2000)

  store.user = null // wipes signed-in users data clean
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Alert: Account still signed in.').addClass('failure')

  $('#sign-out').trigger('reset') // clears the form

  setTimeout(() => { // clears the failure message after 5 seconds
    $('#signout-message').text('').removeClass('failure')
  }, 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
