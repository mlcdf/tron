'use strict'
/* eslint  no-undef: 0, no-unused-vars: 0 */

/**
 * Represent a player
 * @constructor
 * @param {color} c color
 * @param {number} posX x position
 * @param {number} posY y position
 */
const Player = (c, posX, posY) => {
  const clr = c
  let x = posX
  let y = posY
  let direction = ''

  /**
   * Set the direction
   * @param {string} direction the player direction
   */
  const updateDirection = (d) => {
    if (!(
        (direction === 'top' && d === 'bottom') ||
        (direction === 'bottom' && d === 'top') ||
        (direction === 'left' && d === 'right') ||
        (direction === 'right' && d === 'left')
    )) {
      direction = d
    }
  }

   /**
   * Move the Player
   * @param {string} direction the player direction
   */
  const move = (direction) => {
    if (direction === 'top') {
      y -= 5
    } else if (direction === 'bottom') {
      y += 5
    } else if (direction === 'left') {
      x -= 5
    } else if (direction === 'right') {
      x += 5
    }
  }

  /**
   * Draw the player
   * @param {Color} clr color
   * @param {string} x x position
   * @param {string} y y position
   */
  const draw = (clr, x, y) => {
    fill(clr)
    noStroke()
    rect(x, y, 10, 10)
  }

    /**
   * Check if there is a collistion
   * @param {string} direction the player direction
   * @param {string} x x position
   * @param {string} y y position
   * @param {color} backgroundColor the background color
   */
  const checkCollision = (direction, x, y, backgroundColor) => {
    if (direction === 'top') {
      if (!isEqual(get(x, y - 1), darkGreyColor.levels) || !isEqual(get(x + 10, y - 1), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'bottom') {
      if (!isEqual(get(x, y + 10), darkGreyColor.levels) || !isEqual(get(x + 10, y + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'left') {
      if (!isEqual(get(x - 1, y), darkGreyColor.levels) || !isEqual(get(x - 1, y + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (direction === 'right') {
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
    updateDirection: (d) => updateDirection(d)
  }
}

/* Helper function */

/**
 * Check if two objects are equal
 * @param {Object} a the first object
 * @param {Object} b the second object
 */
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
