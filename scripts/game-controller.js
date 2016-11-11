'use strict'

let blue
let orange
let orangeColor
let blueColor
let darkGreyColor
// Called at startup
function setup () {
  createCanvas(800, 600)
  frameRate(60)

  orangeColor = color(246, 106, 53)
  blueColor = color(24, 202, 230)
  darkGreyColor = color(5, 13, 16)

  background(darkGreyColor)

  blue = Player('Blue', blueColor)
  orange = Player('Orange', orangeColor)
  blue.draw()
  orange.draw()
}

// Called at every frame
function draw () {
  blue.draw()
  orange.draw()

  blue.move()
  orange.move()
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
