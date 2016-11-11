'use strict'

/* */

let p
let orangeColor
// Called at startup
function setup () {
  createCanvas(640, 480)
  frameRate(60)

  orangeColor = color(246, 106, 53)

  p = Player('Orange', orangeColor)
  p.draw()
}

// Called at every frame
function draw () {
  p.move()
  p.draw()
}

// Called when a key is pressed
function keyPressed () {
  if (keyCode == UP_ARROW) {
    p.setDirection('t')
  }

  if (keyCode == DOWN_ARROW) {
    p.setDirection('b')
  }

  if (keyCode == LEFT_ARROW) {
    p.setDirection('l')
  }

  if (keyCode == RIGHT_ARROW) {
    p.setDirection('r')
  }
}
