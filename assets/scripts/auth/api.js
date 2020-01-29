'use strict'

const config = require('../config')
const store = require('../store') // note: nothing is storing here yet!

// remember to double check that form data is compatible with this API!

// post form data to the API
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// post form data to API, retrieves authentication token
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// requiring authentication token, edit portion of API data (password)
const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// removes user data from the store object (check later- what is happening with
// the API data here?)
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
