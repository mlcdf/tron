'use strict'

/* eslint  no-undef: 0, no-unused-vars: 0 */

const Player = (n, c, posX, posY) => {
  const name = n
  const clr = c
  let x = posX
  let y = posY
  let direction = ''

  const setDirection = (d) => {
    direction = d
  }

  const move = (direction) => {
    if (direction === 't') {
      y -= 5
    } else if (direction === 'b') {
      y += 5
    } else if (direction === 'l') {
      x -= 5
    } else if (direction === 'r') {
      x += 5
    }
  }

  const draw = (clr, x, y) => {
    fill(clr)
    noStroke()
    rect(x, y, 10, 10)
  }

  const checkCollision = (direction, x, y, backgroundColor) => {
    if (direction === 't') {
      if (!isEqual(get(x, y - 1), darkGreyColor.levels) || !isEqual(get(x + 10, y - 1), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'b') {
      if (!isEqual(get(x, y + 10), darkGreyColor.levels) || !isEqual(get(x + 10, y + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'l') {
      if (!isEqual(get(x - 1, y), darkGreyColor.levels) || !isEqual(get(x - 1, y + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'r') {
      if (!isEqual(get(x + 10, y), darkGreyColor.levels) || !isEqual(get(x + 10, y + 10), darkGreyColor.levels)) {
        return true
      }
    }

    return false
  }

  return {
    move: () => move(direction),
    draw: () => draw(clr, x, y),
    checkCollision: (otherPlayer) => checkCollision(direction, x, y, otherPlayer),
    setDirection: (d) => setDirection(d)
  }
}

/* Helper function */

function isEqual (a, b) {
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i]

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true
}
