const fs = require('fs')
const inputs = fs
  .readFileSync('day4.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n')
  .filter((x) => x)

function fourDigits(input, from, to) {
  if (!/^\d{4}$/.test(input)) {
    return false
  }
  const int = parseInt(input)
  if (int < from) return false
  if (int > to) return false
  return true
}
const eyeColors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])

class Passport {
  static mandatory = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  static validator = {
    byr: (input) => fourDigits(input, 1920, 2002),
    iyr: (input) => fourDigits(input, 2010, 2020),
    eyr: (input) => fourDigits(input, 2020, 2030),
    hgt: (input) => {
      const cm = /^(?<value>\d+)cm$/.exec(input)
      if (cm) {
        return (
          parseInt(cm.groups.value) >= 150 && parseInt(cm.groups.value) <= 193
        )
      }
      const inches = /^(?<value>\d+)in$/.exec(input)
      if (inches) {
        return (
          parseInt(inches.groups.value) >= 59 &&
          parseInt(inches.groups.value) <= 76
        )
      }
    },
    hcl: (input) => /^#[0-9a-f]{6}/.test(input),
    ecl: (input) => eyeColors.has(input),
    pid: (input) => /^\d{9}$/.test(input),
    cid: (input) => true,
  }
  constructor(input) {
    this.map = new Map()
    const list = input.split(/\s+/g)
    list.forEach((keyvalue) => {
      const [key, value] = keyvalue.split(':')
      this.map.set(key, value)
    })
  }
  isValid() {
    return Passport.mandatory.every((key) => this.map.has(key))
  }
  isNewValid() {
    return (
      Passport.mandatory.every((key) => this.map.has(key)) &&
      [...this.map.entries()].every(([key, value]) =>
        Passport.validator[key](value)
      )
    )
  }
}
let valid = 0
for (const line of inputs) {
  const p = new Passport(line)
  if (p.isValid()) valid++
}
console.log(valid)

valid = 0
for (const line of inputs) {
  const p = new Passport(line)
  if (p.isNewValid()) valid++
}
console.log(valid)
