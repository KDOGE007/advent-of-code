const fs = require('fs')
const lines = fs
  .readFileSync('day1.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => x)
  .map((x) => parseInt(x))

// console.log(lines)

sortArr = lines.sort((a, b) => a - b)
// console.log(sortArr)

targetSum = 2020

let i = 0
let j = sortArr.length - 1

while (i < j) {
  if (sortArr[i] + sortArr[j] === targetSum) {
    console.log(sortArr[i], sortArr[j], sortArr[i] * sortArr[j])
    break
  } else if (sortArr[i] + sortArr[j] < targetSum) {
    i += 1
    // console.log(sortArr[i], sortArr[j])
  } else {
    j -= 1
    // console.log(sortArr[i], sortArr[j])
  }
}

for (let fixed = 0; fixed < sortArr.length - 2; fixed++) {
  let i = fixed + 1
  let j = sortArr.length - 1
  while (i < j) {
    if (sortArr[i] + sortArr[j] + sortArr[fixed] === targetSum) {
      console.log(
        sortArr[i],
        sortArr[j],
        sortArr[fixed],
        sortArr[i] * sortArr[j] * sortArr[fixed]
      )
      return
    } else if (sortArr[i] + sortArr[j] + sortArr[fixed] < targetSum) {
      i += 1
      // console.log(sortArr[i], sortArr[j], sortArr[fixed])
    } else {
      j -= 1
      // console.log(sortArr[i], sortArr[j], sortArr[fixed])
    }
  }
}
