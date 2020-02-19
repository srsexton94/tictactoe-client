'use strict'

// a multidimensional array of the possible wins in 3x3 tic-tac-toe
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// check to see if the array passed matches the content of a possible win
const checkPossible = spots => {
  return possibleWins.some(e => JSON.stringify(e) === JSON.stringify(spots))
}

// return true or false depending if input spots constitute a 'win'
const checkWin = spots => {
  // if a player has chosen three spaces, check those three
  if (spots.length === 3) {
    return checkPossible(spots)
  // else if a player has chosen 4 spaces, check all 4 possible combinations
  // return true at the first 'win'
  } else if (spots.length === 4) {
    return (checkPossible([spots[0], spots[1], spots[2]]) ||
            checkPossible([spots[0], spots[1], spots[3]]) ||
            checkPossible([spots[0], spots[2], spots[3]]) ||
            checkPossible([spots[1], spots[2], spots[3]]))
  // else if a player has chosen 5 spaces, check all 10 possible combinations
  // return true at the first 'win'
  } else if (spots.length === 5) {
    return (checkPossible([spots[0], spots[1], spots[2]]) ||
            checkPossible([spots[0], spots[1], spots[3]]) ||
            checkPossible([spots[0], spots[1], spots[4]]) ||
            checkPossible([spots[0], spots[2], spots[3]]) ||
            checkPossible([spots[0], spots[2], spots[4]]) ||
            checkPossible([spots[0], spots[3], spots[4]]) ||
            checkPossible([spots[1], spots[2], spots[3]]) ||
            checkPossible([spots[1], spots[2], spots[4]]) ||
            checkPossible([spots[1], spots[3], spots[4]]) ||
            checkPossible([spots[2], spots[3], spots[4]]))
  // if a player does not yet have 3, 4, or 5 spaces; return false
  } else {
    return false
  }
}

module.exports = {
  checkWin
}
