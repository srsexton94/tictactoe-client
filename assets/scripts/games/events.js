'use strict'
const api = require('./api')
const ui = require('./ui')

let checkTurn = true // declares checker globally so it can be altered by switchPlayers

const switchPlayers = () => {
  let currentValue
  if (checkTurn) { // checks which turn it is
    currentValue = 'x'
  } else {
    currentValue = 'o'
  }
  checkTurn = !checkTurn // alternates checker
  return currentValue
}

const onStartGame = event => {
  event.preventDefault() // prevents refresh

  api.startGame() // POSTs a new game to the API
    .then(ui.onStartGameSuccess)
    .then(() => {
      checkTurn = true
    })
    .catch(ui.onStartGameFailure)
}

const onSelectSquare = event => {
  event.preventDefault() // prevents refresh

  const cellID = event.target.id // returns cell# clicked
  const currentValue = switchPlayers() // alternates & returns 'x' and 'o'

  // if a block has already been chosen, disallow and display error
  if ($(`#${cellID}`).text()) {
    // displays error message
    $('#gameboard-message').text('Already chosen. Try again.').addClass('failure')
    // deletes message after 2 seconds
    setTimeout(() => {
      $('#gameboard-message').text('').removeClass('failure')
    }, 2000)
    // switches players so next selection will return to current
    switchPlayers()
    // stops running the funtion here to start again
    return
  // otherwise mark the spot with the current player's token
  } else {
    $(`#${cellID}`).text(`${currentValue}`)
  }

  // codes 'data' with the chosen square (index) and player (currentValue)
  const data = {
    'game': {
      'cell': {
        'index': cellID,
        'value': currentValue
      },
      'over': false
    }
  }

  api.selectSquare(data) // PATCHes api games to reflect chosen square
    .then(ui.onSelectSquareSuccess)
    .catch(ui.onSelectSquareFailure)
}

const onGetGames = event => {
  event.preventDefault() // prevents refresh

  api.getGames() // GET requests the API to display game tally
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onStartGame,
  onSelectSquare,
  onGetGames,
  switchPlayers,
  checkTurn
}
