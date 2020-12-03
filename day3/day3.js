const fs = require('fs')
const inputs = fs
  .readFileSync('day3.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x)

// console.log(inputs)

//creating map prototype
class Map {
  constructor(map) {
    this.map = map
  }
  getPosition(x, y) {
    //this will drop the pointer to row [y] and [x]th element in that row
    return this.map[y][x % this.map[0].length]
  }
  getHeight() {
    return this.map.length
  }
}

//get all input elments into map array
const map = new Map(inputs.map((line) => [...line]))

//find trees encounter
function trySlope(dx, dy) {
  let x = 0
  let y = 0
  let trees = 0

  while (y < map.getHeight()) {
    const current = map.getPosition(x, y)
    if (current == '#') {
      trees++
    }
    x += dx
    y += dy
  }

  return trees
}
console.log(`first part answer: ${trySlope(3, 1)}`)

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]
let result = 1
for (const slope of slopes) result *= trySlope(...slope)
console.log(`second part answer: ${result}`)
