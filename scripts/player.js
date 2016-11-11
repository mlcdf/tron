'use strict'

const Player = (n, c) => {
  const name = n
  const clr = c
  let x = 0
  let y = 0
  let direction = ''

  const setDirection = (d) => {
    direction = d
  }

  const move = (direction) => {
    if (direction === 't') {
        y = y - 1
      } else if (direction === 'b') {
          y = y + 1
        } else if (direction === 'l') {
          x = x - 1
        } else if (direction === 'r') {
          x = x + 1
        }
  }

  const draw = (clr, x, y) => {
    fill(clr)
    noStroke()
    rect(x, y, 10, 10)
  }

  return {
    move: () => move(direction),
    draw: () => draw(clr, x, y),
    setDirection: (d) => setDirection(d)
  }
}
