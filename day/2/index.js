const {readFileSync} = require('fs')
const _ = require('lodash')
const data = readFileSync(`${__dirname}/data.txt`).toString('utf8').trimEnd().split('\n').map(line => line.split(' '))

{
    let x = 0;
    let y = 0;

    const commands = {
        up(number) {
            y -= number
        },
        down(number) {
            y += number
        },
        forward(number) {
            x += number
        },
    }

    for (let [command, number] of data) {
        commands[command](Number(number))
    }

    console.log('Answer 1', x * y)
}
{
    let x = 0;
    let y = 0;
    let aim = 0;

    const commands = {
        up(number) {
            aim -= number
        },
        down(number) {
            aim += number
        },
        forward(number) {
            x += number
            y += aim * number
        },
    }

    for (let [command, number] of data) {
        commands[command](Number(number))
    }

    console.log('Answer 2', x * y)
}
