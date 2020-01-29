'use strict'
const getFormFields = require('FILEPATH') // need to add filepath!
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault() // prevents automatic page refresh

  const form = event.target // saves form that was submitted into a variable
  const data = getFormFields(form) // getFormFields retrieves API-friendly data

  api.signUp(data) // post data to API, trigger success/failure cases
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => { // mirrors previous comments
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => { // mirrors previous comments
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => { // mirrors previous comments
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
