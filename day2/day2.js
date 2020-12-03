const fs = require('fs')
const inputs = fs
  .readFileSync('day2.txt', { encoding: 'utf-8' })
  .split('\r\n')
  .filter((x) => x)

// console.log(lines)

let validPassPt1 = 0
let validPassPt2 = 0
inputs.forEach((line) => {
  //using regex to group the result into objects
  const {
    groups,
  } = /^(?<start>\d+)-(?<to>\d+) (?<char>.): (?<password>.*)$/.exec(line)
  // console.log(groups)

  let counter = 0
  for (let i = 0; i < groups.password.length; i++) {
    if (groups.char == groups.password[i]) {
      counter++
    }
  }
  if (counter >= groups.start && counter <= groups.to) {
    validPassPt1++
  }
  // console.log(counter)
  let check1 = groups.char == groups.password[groups.start - 1]
  let check2 = groups.char == groups.password[groups.to - 1]
  if (check1 != check2) {
    validPassPt2++
  }
})
console.log(validPassPt1)
console.log(validPassPt2)
