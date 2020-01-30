'use strict'

const store = require('./../store.js')

const onSignUpSuccess = response => {
  // add success message in signup form
  $('#signup-message').text(`${response.user.username} successfully signed up`).addClass('success')

  // clears the form
  $('#sign-up').trigger('reset')

  setTimeout(() => {
    $('#signup-message').text('').removeClass('success')
  }, 5000)
}

const onSignUpFailure = response => {
  // add failure message in signup form
  $('#signup-message').text('Sorry, sign up unsuccessful.').addClass('failure')

  // clears the form
  $('#sign-up').trigger('reset')

  setTimeout(() => {
    $('#signup-message').text('').removeClass('success')
  }, 5000)
}

const onSignInSuccess = response => {
  // add success message in signin form
  $('#signin-message').text(`Welcome ${response.user.email}`).addClass('success')

  // clears the form
  $('#sign-in').trigger('reset')

  setTimeout(() => {
    $('#signin-message').text('').removeClass('success')
  }, 5000)

  // stores the response data in 'store.js' to access token later
  store.user = response.user
}

const onSignInFailure = response => {
  // add success message in signin form
  $('#signin-message').text('Email or password incorrect, Please try again.').addClass('failure')

  // clears forms
  $('#sign-in').trigger('reset')

  setTimeout(() => {
    $('#signin-message').text('').removeClass('success')
  }, 5000)
}

const onChangePasswordSuccess = response => {
  // add success message in changepassword form
  $('#changepassword-message').text('Password changed successfully.').addClass('success')

  // clears form
  $('#change-password').trigger('reset')

  setTimeout(() => {
    $('#changepassword-message').text('').removeClass('success')
  }, 5000)
}

const onChangePasswordFailure = response => {
  // add success message in changepassword form
  $('#changepassword-message').text('Password update failed, Please try again.').addClass('failure')

  // clears form
  $('#change-password').trigger('reset')

  setTimeout(() => {
    $('#changepassword-message').text('').removeClass('success')
  }, 5000)
}

const onSignOutSuccess = response => {
  // add success message in signout form
  $('#signout-message').text(`Goodbye!`).addClass('success')

  // clears form
  $('#sign-out').trigger('reset')

  setTimeout(() => {
    $('#signout-message').text('').removeClass('success')
  }, 5000)

  // wipe signed in data clean
  store.user = null
}

const onSignOutFailure = response => {
  // add success message in signout form
  $('#signout-message').text('Alert: Account still signed in.').addClass('failure')

  // clears form
  $('#sign-out').trigger('reset')

  setTimeout(() => {
    $('#signout-message').text('').removeClass('success')
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
