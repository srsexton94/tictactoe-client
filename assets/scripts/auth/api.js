'use strict'

const config = require('../config')
const store = require('../store')

// post form data to the API
const signUp = data => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// post form data to API, retrieves authentication token
const signIn = data => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// post form data to API, retrieves authentication token
const guestSignIn = data => {
  $('.loader').removeClass('hidden')
  $('#auth-navbox').addClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// requiring authentication token, edit portion of API data (password)
const changePassword = data => {
  $('.loader').removeClass('hidden')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// removes user data from the store object
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
  guestSignIn,
  changePassword,
  signOut
}
