'use strict'
/* eslint  no-undef: 0, no-unused-vars: 0 */

let bluePlayer
let orangePlayer
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

const canvasWidth = 960
const canvasHeight = 720

p5.disableFriendlyErrors = true

// Called at startup
function setup () {
  const canvas = createCanvas(canvasWidth, canvasHeight)
  canvas.parent('sketch-holder')

  let canvasDomEl = document.getElementById('defaultCanvas0')
  canvasDomEl.focus()

  frameRate(60)

  orangeColor = color(246, 106, 53)
  blueColor = color(24, 202, 230)
  darkGreyColor = color(5, 13, 16)
  background(darkGreyColor)

  bluePlayer = Player(
    blueColor,
    Math.trunc(canvasWidth * 1 / 3),
    Math.trunc(canvasHeight / 2),
    'right'
  )

  orangePlayer = Player(
    orangeColor,
    Math.trunc(canvasWidth * 2 / 3),
    Math.trunc(canvasHeight / 2),
    'left'
  )

  bluePlayer.keys = {
    'Z': 'top',
    'S': 'bottom',
    'Q': 'left',
    'D': 'right'
  }

  orangePlayer.keys = {
    38: 'top',
    40: 'bottom',
    37: 'left',
    39: 'right'
  }

  bluePlayer.draw()
  orangePlayer.draw()
}

// Called at every frame
function draw () {
  if (gameState === state.START_SCREEN) {
    gameState = state.PLAYING
  } else if (gameState === state.PLAYING) {
    if (bluePlayer.checkCollision(darkGreyColor)) {
      winner = orangePlayer
      gameState = state.FINISHED
    } else if (orangePlayer.checkCollision(darkGreyColor)) {
      winner = bluePlayer
      gameState = state.FINISHED
    }

    bluePlayer.draw()
    orangePlayer.draw()

    bluePlayer.move()
    orangePlayer.move()
  }
}

// Called when a key is pressed
function keyPressed () {
  if (key in bluePlayer.keys) {
    bluePlayer.updateDirection(bluePlayer.keys[key])
  }

  if (keyCode in orangePlayer.keys) {
    orangePlayer.updateDirection(orangePlayer.keys[keyCode])
  }
}
