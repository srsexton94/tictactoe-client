'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault() // prevents automatic page refresh

  const form = event.target // saves form that was submitted into a variable
  const data = getFormFields(form) // getFormFields retrieves API-friendly data

  api.signUp(data) // POSTs user data to API, trigger success/failure cases
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => { // the following all mirror previous comments
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onGuestSignIn = () => {
  const data = {
    'credentials': {
      'email': 'guest-player@email.com',
      'password': 'zowpt7rv4fj'
    }
  }

  api.guestSignIn(data)
    .then(ui.onGuestSignInSuccess)
    .catch(ui.onGuestSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onGuestSignIn,
  onChangePassword,
  onSignOut
}
