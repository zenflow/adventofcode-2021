const {readFileSync} = require('fs')
const _ = require('lodash')
const lines = readFileSync(`${__dirname}/data.txt`).toString('utf8').trimEnd().split('\n').map(line =>
    line.split(' -> ').map(point => {
        const [x, y] = point.split(',').map(Number)
        return {x, y}
    })
)

{
    const grid = []
    function incrementGridCell (x, y) {
        while(grid[x] === undefined) grid.push([])
        while(grid[x][y] === undefined) grid[x].push(0)
        grid[x][y]++
    }
    for (const line of lines) {
        if (line[0].x === line[1].x) {
            const ys = line.map(point => point.y)
            if (ys[0] > ys[1]) ys.reverse()
            for (let y = ys[0]; y <= ys[1]; y++) {
                incrementGridCell(line[0].x, y)
            }
        } else if (line[0].y === line[1].y) {
            const xs = line.map(point => point.x)
            if (xs[0] > xs[1]) xs.reverse()
            for (let x = xs[0]; x <= xs[1]; x++) {
                incrementGridCell(x, line[0].y)
            }
        }
    }
    let count = 0;
    for (const column of grid) {
        for (const cell of column) {
            if (cell >= 2) count++
        }
    }
    console.log("Answer 1:", count)
}
{
    const grid = []
    function incrementGridCell (x, y) {
        while(grid[x] === undefined) grid.push([])
        while(grid[x][y] === undefined) grid[x].push(0)
        grid[x][y]++
    }
    for (const line of lines) {
        if (line[0].x === line[1].x) {
            const ys = line.map(point => point.y)
            if (ys[0] > ys[1]) ys.reverse()
            for (let y = ys[0]; y <= ys[1]; y++) {
                incrementGridCell(line[0].x, y)
            }
        } else if (line[0].y === line[1].y) {
            const xs = line.map(point => point.x)
            if (xs[0] > xs[1]) xs.reverse()
            for (let x = xs[0]; x <= xs[1]; x++) {
                incrementGridCell(x, line[0].y)
            }
        } else if (Math.abs(line[1].x - line[0].x) === Math.abs(line[1].y - line[0].y)) {
            const maxPosition = Math.abs(line[1].x - line[0].x)
            for (let position = 0; position <= maxPosition; position++) {
                incrementGridCell(
                    line[0].x + (line[1].x - line[0].x) * position / maxPosition,
                    line[0].y + (line[1].y - line[0].y) * position / maxPosition,
                )
            }
        }
    }
    let count = 0;
    for (const column of grid) {
        for (const cell of column) {
            if (cell >= 2) count++
        }
    }
    console.log("Answer 2:", count)
}
