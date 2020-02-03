'use strict'

const possibleCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkPossible = spots => {
  return possibleCombos.some(e => JSON.stringify(e) === JSON.stringify(spots))
}

// return true or false depending if input spots constitute a 'win'
const checkWin = spots => {
  if (spots.length === 3) {
    return checkPossible(spots)
  } else if (spots.length === 4) {
    return (checkPossible([spots[0], spots[1], spots[2]]) ? true :
      checkPossible([spots[0], spots[1], spots[3]]) ? true :
        checkPossible([spots[0], spots[2], spots[3]]) ? true :
          checkPossible([spots[1], spots[2], spots[3]]) ? true : false)
  } else if (spots.length === 5) {
    return (checkPossible([spots[0], spots[1], spots[2]]) ? true :
      checkPossible([spots[0], spots[1], spots[3]]) ? true :
        checkPossible([spots[0], spots[1], spots[4]]) ? true :
          checkPossible([spots[0], spots[2], spots[3]]) ? true :
            checkPossible([spots[0], spots[2], spots[4]]) ? true :
              checkPossible([spots[0], spots[3], spots[4]]) ? true :
                checkPossible([spots[1], spots[2], spots[3]]) ? true :
                  checkPossible([spots[1], spots[2], spots[4]]) ? true :
                    checkPossible([spots[1], spots[3], spots[4]]) ? true :
                      checkPossible([spots[2], spots[3], spots[4]]) ? true : false)
  } else {
    return false
  }
}

module.exports = {
  checkWin
}
