const fs = require('fs');

const setupInputData = () => {
    const data = fs.readFileSync('./day3Input.txt', {encoding: 'utf8' })
    return cleanInput(data);
}

const cleanInput = (data) => {
    return data.trim().split("\n").map(data => data.split(''))
}

const getTreeHits = (right, down, input) => {
    const height = input.length;
    const length = input[0].length
    let xCord = 0;
    let yCord = 0;
    let treeCount = 0;
    while (yCord <= height - 1) {

        if (xCord + right <= length - 1) {
            xCord = xCord + right
        } else {
            xCord = xCord + right - length;
        }

        yCord = yCord + down;

        if (yCord <= (height - 1) && input[yCord][xCord] === '#') {
            treeCount++;
        }
    }
    return treeCount;
}

    const main = () => {
        const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]];
        const input = setupInputData()

        const treeHits = slopes.map((slope) => {
            return getTreeHits(slope[0], slope[1], input);
        })

        return treeHits.reduce((cv, acc) => {
            return cv * acc;
        })
}

console.log(main());




