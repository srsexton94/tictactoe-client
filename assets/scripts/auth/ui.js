'use strict'

const store = require('./../store.js')

const onSignUpSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add success message in signup form
  $('#signup-message').text(`${response.user.email} successfully signed up`).addClass('success')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => { // removes success message after 1 second
    $('#signup-message').text('').removeClass('success')
    $('#sign-up').addClass('hidden')
    $('#sign-in').removeClass('hidden')
  }, 1000)
}

const onSignUpFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add failure message in signup form
  $('#signup-message').text('Sorry, sign up unsuccessful.').addClass('failure')

  $('#sign-up').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 3 seconds
    $('#signup-message').text('').removeClass('failure')
  }, 3000)
}

const onSignInSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add success message in signin form
  $('#signin-message').text(`Welcome ${response.user.email}`).addClass('success')

  $('#sign-in').trigger('reset') // clears the form

  // removes success message, hides the signin/up forms, and reveals
  // the game start page; after 1.5 seconds
  setTimeout(() => {
    $('#signin-message').text('').removeClass('success')
    $('#sign-in').addClass('hidden')
    $('#game').removeClass('hidden')
  }, 1500)

  // stores the response data in 'store.js' to access authentication token later
  store.user = response.user
  store.user.games = []
}

const onSignInFailure = response => {
  // hide loader image
  $('.loader').addClass('hidden')
  // add failure message in signin form
  $('#signin-message').text('Email or password incorrect, Please try again.').addClass('failure')

  $('#sign-in').trigger('reset') // clears the form

  setTimeout(() => {
    $('#signin-message').text('').removeClass('failure')
  }, 3000)
}

const onGuestSignInSuccess = response => {
  $('.loader').addClass('hidden') // hide loader image
  console.log('welcome guest!')
  $('#auth').addClass('hidden')
  $('#game').removeClass('hidden')
  $('#changepassword-nav').addClass('hidden')
  $('#auth-navbox').removeClass('hidden')
  // stores the response data in 'store.js' to access authentication token later
  store.user = response.user
  store.user.games = []
}

const onGuestSignInFailure = response => {
  $('.loader').addClass('hidden') // hide loader image
  $('#auth-navbox').removeClass('hidden') // reveals auth options
}

const onChangePasswordSuccess = response => {
  // hide loader image
  $('.loader').addClass('hidden')
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
  // hide loader image
  $('.loader').addClass('hidden')
  // add success message in changepassword form
  $('#changepassword-message').text('Password update failed, Please try again.').addClass('failure')

  $('#change-password').trigger('reset') // clears the form

  setTimeout(() => { // removes failure message after 3 seconds
    $('#changepassword-message').text('').removeClass('failure')
  }, 3000)
}

const onSignOutSuccess = response => {
  // add success message in signout form
  $('#signout-message').text(`Goodbye!`).addClass('success')

  // clears the success message, reveals the signin/up forms, hides the game and
  // the game board; in 1 second
  setTimeout(() => {
    $('#signout-message').text('').removeClass('success')
    $('#title-page').removeClass('hidden')
    $('#game-start').removeClass('hidden')
    $('#changepassword-nav').removeClass('hidden')
    $('#auth').removeClass('hidden')
    $('#game').addClass('hidden')
    $('#game-board').addClass('hidden')
    // if displayed, hide the end game image
    $('.endgame-img').addClass('hidden')
  }, 1000)

  store.user = null // wipes signed-in users data clean
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Alert: Account still signed in.').addClass('failure')

  // if displayed, hide the end game image
  $('.endgame-img').addClass('hidden')

  setTimeout(() => { // clears the failure message after 3 seconds
    $('#signout-message').text('').removeClass('failure')
  }, 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onGuestSignInSuccess,
  onGuestSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
