'use strict'
/* eslint  no-undef: 0, no-unused-vars: 0 */

const PLAYER_BLUE_KEYS = {
  'Z': 'top',
  'S': 'bottom',
  'Q': 'left',
  'D': 'right'
}

const PLAYER_ORANGE_KEYS = {
  38: 'top',
  40: 'bottom',
  37: 'left',
  39: 'right'
}

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

p5.disableFriendlyErrors = true

// Called at startup
function setup () {
  createCanvas(1280, 720)
  frameRate(60)

  orangeColor = color(246, 106, 53)
  blueColor = color(24, 202, 230)
  darkGreyColor = color(5, 13, 16)

  background(darkGreyColor)

  bluePlayer = Player(blueColor, 266, 300, 'right')
  orangePlayer = Player(orangeColor, 533, 300, 'left')
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
  if (key in PLAYER_BLUE_KEYS) {
    bluePlayer.updateDirection(PLAYER_BLUE_KEYS[key])
  }

  if (keyCode in PLAYER_ORANGE_KEYS) {
    orangePlayer.updateDirection(PLAYER_ORANGE_KEYS[keyCode])
  }
}
