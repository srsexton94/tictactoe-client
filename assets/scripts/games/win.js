'use strict'

const exceptions = threeSpots => {
  const str = (JSON.stringify(threeSpots))
  if ((str === JSON.stringify([[0, 0], [1, 2], [2, 1]])) || (str === JSON.stringify([[0, 1], [1, 0], [2, 2]]))) {
    return true
  }
  return false
}

const inaRow = threeSpots => {
  // this block tests to see if the sum of each axes add to 3 & stores boolean in variable
  let xCounter = 0
  let yCounter = 0
  threeSpots.forEach(e => {
    xCounter += e[0]
    yCounter += e[1]
  })
  const xMakesThree = xCounter === 3
  const yMakesThree = yCounter === 3

  const exception = exceptions(threeSpots)

  // these two lines test if all of each axes are the same, and stores the boolean in a variable
  const allX = threeSpots.every(e => (e[0] === threeSpots[0][0]))
  const allY = threeSpots.every(e => (e[1] === threeSpots[0][1]))

  // this block tests to see if the player won
  // if both a players axes are either all the same or add up to three
  // AND if they're not one of the two exceptions, they've won!
  if (((xMakesThree && (yMakesThree || allY)) || (allX && yMakesThree)) && !exception) {
    return true
  } else {
    return false
  }
}

module.exports = {
  inaRow
}
