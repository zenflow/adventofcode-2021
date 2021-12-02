const {readFileSync} = require('fs')
const _ = require('lodash')
const readings = readFileSync(`${__dirname}/data.txt`).toString('utf8').split('\n').map(Number)

{
    let numberOfIncreases = 0
    for (let i = 1; i < readings.length; i++) {
        if (readings[i] > readings[i - 1]) {
            numberOfIncreases++
        }
    }
    console.log('Answer 1:', numberOfIncreases)
}
{
    const readingsPerSum = 3
    const sums = Array.from(readings.keys())
        .slice(0, 1 - readingsPerSum)
        .map(i => _.sum(readings.slice(i, i + readingsPerSum)))

    let numberOfIncreases = 0
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] > sums[i - 1]) {
            numberOfIncreases++
        }
    }
    console.log('Answer 2:', numberOfIncreases)
}
