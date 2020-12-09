const fs = require('fs')
const { join } = require('path')
//split input into array with each line represent one element inside the array
const inputs = fs
  .readFileSync('day6.txt', { encoding: 'utf-8' })
  .trim()
  .replace(/\r/g, '')
  .split('\n\n')

// console.log(inputs)
let total = 0
let unique2 = 0

//put the array element into a set and add all of the set size to find the unique answer
for (const group of inputs) {
  const unique = new Set([...group.replace(/\n/g, '')])
  total += unique.size

  unique2 += [...unique].filter((char) =>
    group
      .trim()
      // .replace(/\r/g, '')
      .split('\n')
      .every((form) => form.includes(char))
  ).length
}
console.log(total)

console.log(unique2)
