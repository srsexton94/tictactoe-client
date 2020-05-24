'use strict'

const store = require('./../store')
const win = require('./win')

const endGameImage = winner => {
  if (winner) {
    const rando = Math.floor(Math.random() * 10) + 1
    const randomImage = `url('../../public/winner${rando}.jpg')`
    $('.endgame-img').removeClass('hidden')
    $('.endgame-img').css('background-image', randomImage)
    $('.endgame-img h3').text(`Player ${winner} wins!`)
  } else {
    $('.endgame-img').removeClass('hidden')
    $('.endgame-img').css('background-image', "url('../../public/tie.jpg')")
    $('.endgame-img h3').text('It\'s a tie!')
  }
}

const gameContinue = next => {
  // Adds success message above gameboard
  $('#gameboard-message').text(`Good move! ${next}'s turn next!`).addClass('success')

  setTimeout(() => { // removes success message after 5 seconds
    $('#gameboard-message').text('').removeClass('success')
  }, 1500)
}

const gameEnd = winner => {
  endGameImage(winner)

  $('.square').addClass('game-disable') // disables gameboard actions
  $('.endgame').addClass('disable') // disables action on all but "new game"

  setTimeout(() => { // removes success message after 8 seconds
    $('#gameboard-message').text('').removeClass('success')
  }, 10000)
}

const gameEngine = response => {
  // updates stored current game to match API response
  store.user.currentGame.cells = response.game.cells
  // clones the stored current game to use cell array without mutating original
  const gameboard = [...store.user.currentGame.cells]

  // initializes empty arrays to later push each player's spot choices
  const xSpots = []
  const oSpots = []

  // for each spot of the gameboard, this block pushes the index# of 'x' or 'o'
  // to the appropriate 'spots' array
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === 'x') {
      xSpots.push(i)
    } else if (gameboard[i] === 'o') {
      oSpots.push(i)
    }
  }

  if (win.checkWin(xSpots)) { // if X has a winning combo, X wins!
    gameEnd('X')
  } else if (win.checkWin(oSpots)) { // if O has a win, O wins!
    gameEnd('O')
  } else if (xSpots.length === 5) { // otherwise, if X reaches 5 plays, its a tie
    gameEnd()
  } else if (xSpots.length > oSpots.length) { // if no one wins, and its not yet a tie, continue playing!
    gameContinue('O')
  } else {
    gameContinue('X')
  }
}

module.exports = {
  gameEngine
}
