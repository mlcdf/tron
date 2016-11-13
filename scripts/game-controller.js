'use strict'
/* eslint  no-undef: 0, no-unused-vars: 0 */

let blue
let orange
let orangeColor
let blueColor
let darkGreyColor

let winner

const state = {
  START_SCREEN: 0,
  PLAYING: 1,
  FINISHED: 2
}

let gameState = state.START_SCREEN

p5.disableFriendlyErrors = true

// Called at startup
function setup () {
  createCanvas(800, 600)
  frameRate(60)

  orangeColor = color(246, 106, 53)
  blueColor = color(24, 202, 230)
  darkGreyColor = color(5, 13, 16)

  background(darkGreyColor)

  blue = Player(blueColor, 266, 300)
  orange = Player(orangeColor, 533, 300)
  blue.draw()
  orange.draw()
}

// Called at every frame
function draw () {
  if (gameState === state.START_SCREEN) {
    gameState = state.PLAYING
  } else if (gameState === state.PLAYING) {
    if (blue.checkCollision(darkGreyColor)) {
      winner = orange
      gameState = state.FINISHED
    } else if (orange.checkCollision(darkGreyColor)) {
      winner = blue
      gameState = state.FINISHED
    }

    blue.draw()
    orange.draw()

    blue.move()
    orange.move()
  }
}

// Called when a key is pressed
function keyPressed () {
  if (key === 'Z') {
    blue.setDirection('t')
  } else if (key === 'S') {
    blue.setDirection('b')
  } else if (key === 'Q') {
    blue.setDirection('l')
  } else if (key === 'D') {
    blue.setDirection('r')
  }

  if (keyCode === UP_ARROW) {
    orange.setDirection('t')
  } else if (keyCode === DOWN_ARROW) {
    orange.setDirection('b')
  } else if (keyCode === LEFT_ARROW) {
    orange.setDirection('l')
  } else if (keyCode === RIGHT_ARROW) {
    orange.setDirection('r')
  }
}
