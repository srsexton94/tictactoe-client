'use strict'

const row = require('./row')

// this function checks each possible spot combination (depending on how many
// spots the player has yet chosen) to see if they're in a row (if they win)
const checkWin = spots => {
  let answer = false
  if (spots.length === 3) {
    answer = row.inaRow(spots)
  } else if (spots.length === 4) {
    switch (true) {
      case row.inaRow([spots[0], spots[1], spots[2]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[1], spots[3]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[2], spots[3]]):
        answer = true
        break
      case row.inaRow([spots[1], spots[2], spots[3]]):
        answer = true
        break
    }
  } else if (spots.length === 5) {
    switch (true) {
      case row.inaRow([spots[0], spots[1], spots[2]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[1], spots[3]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[1], spots[4]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[2], spots[3]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[2], spots[4]]):
        answer = true
        break
      case row.inaRow([spots[0], spots[3], spots[4]]):
        answer = true
        break
      case row.inaRow([spots[1], spots[2], spots[3]]):
        answer = true
        break
      case row.inaRow([spots[1], spots[2], spots[4]]):
        answer = true
        break
      case row.inaRow([spots[1], spots[3], spots[4]]):
        answer = true
        break
      case row.inaRow([spots[2], spots[3], spots[4]]):
        answer = true
        break
    }
  }
  return answer
}

// returns true, expected false
console.log(checkWin([[0, 0], [0, 1], [1, 2], [2, 0], [2, 2]]))

module.exports = {
  checkWin
}
