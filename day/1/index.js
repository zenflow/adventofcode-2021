const {readFileSync} = require('fs')
const _ = require('lodash')
const readings = readFileSync(`${__dirname}/data.txt`).toString('utf8').split('\n').map(Number)

function countIncreases(numbers) {
    let count = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            count++
        }
    }
    return count
}

console.log('Answer 1:', countIncreases(readings))

const readingsPerSum = 3
const sums = Array.from(readings.keys())
    .slice(0, 1 - readingsPerSum)
    .map(i => _.sum(readings.slice(i, i + readingsPerSum)))

console.log('Answer 2:', countIncreases(sums))
