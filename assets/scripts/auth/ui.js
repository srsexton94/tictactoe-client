'use strict'

const store = require('./../store.js')

const onSignUpSuccess = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#signup-message').text(`${response.user.username} successfully signed up`)

  // clears the form
  $('#sign-up').trigger('reset')

  // commented code is from classwork, clears message after 5 seconds
  // add back in if useful
  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
}

const onSignUpFailure = response => {
  // add failure message in signup form --> **still need to add color/style!**
  $('#signup-message').text('Sorry, sign up unsuccessful.')

  // clears the form
  $('#sign-up').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
}

const onSignInSuccess = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#signin-message').text(`Welcome ${response.user.username}`)

  // clears the form
  $('#sign-in').trigger('reset')

  /* setTimeout(() => {
    $('#signin-message').text('').removeClass('success')
    $('#sign-up').addClass('hidden')
    $('#sign-in').addClass('hidden')
    $('#change-password').removeClass('hidden')
    $('#sign-out').removeClass('hidden')
  }, 5000) */

  // stores the response data in 'store.js' to access token later
  store.user = response.user
}

const onSignInFailure = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#message').text('Email or password incorrect, Please try again.')

  // clears forms
  $('#sign-in').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
}

const onChangePasswordSuccess = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#message').text('Password changed successfully.')

  // clears form
  $('#change-password').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
}

const onChangePasswordFailure = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#message').text('Password update failed, Please try again.')

  // clears form
  $('#change-password').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
}

const onSignOutSuccess = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#message').text(`Goodbye ${response.user.username}!`)

  // clears form
  $('#sign-out').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
    $('#sign-up').removeClass('hidden')
    $('#sign-in').removeClass('hidden')
    $('#change-password').addClass('hidden')
    $('#sign-out').addClass('hidden')
  }, 5000) */

  // wipe signed in data clean
  store.user = null
}

const onSignOutFailure = response => {
  // add success message in signup form --> **still need to add color/style!**
  $('#message').text('Alert: Account still signed in.')

  // clears form
  $('#sign-out').trigger('reset')

  /* setTimeout(() => {
    $('#message').text('').removeClass('success')
  }, 5000) */
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
