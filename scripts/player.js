'use strict'
/* eslint  no-undef: 0, no-unused-vars: 0 */

/**
 * Represent a player
 * @constructor
 * @param {color} c color
 * @param {number} x x position
 * @param {number} y y position
 * @param {number} d direction
 */
const Player = (c, x, y, d) => {
  const mColor = c
  let mX = x
  let mY = y
  let mDirection = d

  /**
   * Set the direction
   * @param {string} direction the player direction
   */
  const updateDirection = (d) => {
    if ((['top', 'bottom'].includes(mDirection) && ['left', 'right'].includes(d)) ||
        (['left', 'right'].includes(mDirection) && ['top', 'bottom'].includes(d))) {
      mDirection = d
    }
  }

   /**
   * Move the player
   * @param {string} mDirection the player direction
   */
  const move = (mDirection) => {
    if (mDirection === 'top') {
      mY -= 2
    } else if (mDirection === 'bottom') {
      mY += 2
    } else if (mDirection === 'left') {
      mX -= 2
    } else if (mDirection === 'right') {
      mX += 2
    }
  }

  /**
   * Draw the player
   * @param {Color} mColor color
   * @param {string} mX mX position
   * @param {string} mY mY position
   */
  const draw = (mColor, mX, mY) => {
    fill(mColor)
    noStroke()
    rect(mX, mY, 10, 10)
  }

    /**
   * Check if there is a collistion
   * @param {string} mDirection the player direction
   * @param {string} mX mX position
   * @param {string} mY mY position
   * @param {color} backgroundColor the background color
   */
  const checkCollision = (mDirection, mX, mY, backgroundColor) => {
    if (mDirection === 'top') {
      if (!isEqual(get(mX, mY - 1), darkGreyColor.levels) || !isEqual(get(mX + 10, mY - 1), darkGreyColor.levels)) {
        return true
      }
    }

    if (mDirection === 'bottom') {
      if (!isEqual(get(mX, mY + 10), darkGreyColor.levels) || !isEqual(get(mX + 10, mY + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (mDirection === 'left') {
      if (!isEqual(get(mX - 1, mY), darkGreyColor.levels) || !isEqual(get(mX - 1, mY + 10), darkGreyColor.levels)) {
        return true
      }
    }

    if (mDirection === 'right') {
      if (!isEqual(get(mX + 10, mY), darkGreyColor.levels) || !isEqual(get(mX + 10, mY + 10), darkGreyColor.levels)) {
        return true
      }
    }

    return false
  }

  return {
    move: () => move(mDirection),
    draw: () => draw(mColor, mX, mY),
    checkCollision: (otherPlayer) => checkCollision(mDirection, mX, mY, otherPlayer),
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
