const {readFileSync} = require('fs')
const _ = require('lodash')
const data = readFileSync(`${__dirname}/data.txt`).toString('utf8').trimEnd().split(',').map(Number)

{
    const fish = data.slice()
    for (const day of _.range(0, 80)) {
        for (const index of _.range(0, fish.length)) {
            if (fish[index] > 0) {
                fish[index]--
            } else {
                fish[index] = 6
                fish.push(8)
            }
        }
    }
    console.log('Answer 1:', fish.length)
}
{
    const fish = Array.from({ length: 9 }).fill(0)
    for (const state of data) fish[state]++
    for (const day of _.range(0, 256)) {
        const births = fish.shift()
        fish[6] += births
        fish[8] = births
    }
    console.log('Answer 2:', _.sum(fish))
}
