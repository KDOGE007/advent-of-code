const fs = require('fs')
const inputs = fs
  .readFileSync('day5.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x)

// console.log(inputs)

// FBFBBFFRLR

function stringToInt(str) {
  return parseInt(
    [...str].map((x) => (x === 'B' || x === 'R' ? 1 : 0)).join(''),
    2
  )
}

let highest = 0
class Seat {
  constructor(string) {
    this.row = stringToInt(string.slice(0, 7))
    this.column = stringToInt(string.slice(7))
    this.id = this.row * 8 + this.column
    if (this.id > highest) {
      highest = this.id
    }
  }
}
const seats = []
for (const line of inputs) {
  const s = new Seat(line)
  seats.push(s)
}

console.log(highest)

const ids = seats.map((s) => s.id)

ids.sort((a, b) => a - b)
// console.log(ids)

for (let i = 0; i < ids.length; i++) {
  if (ids[i] - ids[i + 1] < -1) {
    console.log(ids[i] + 1)
    break
  }
}
