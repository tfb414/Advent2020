const fs = require('fs');

const setupInputData = () => {
    const data = fs.readFileSync('./day3Input.txt', {encoding: 'utf8' })
    return cleanInput(data);
}

const cleanInput = (data) => {
    return data.trim().split("\n").map(data => data.split(''))
}

const main = () => {
    const input = setupInputData()
    const height = input.length;
    const length = input[0].length
    let xCord = 0;
    let yCord = 0;
    let treeCount = 0;
    while (yCord <= height-1) {

        if (xCord + 3 <= length - 1) {
            xCord = xCord + 3
        } else {
            xCord = xCord + 3 - length;
        }

        yCord++;

        if (yCord <= (height-1) && input[yCord][xCord] === '#') {
            treeCount++;
        }
    }
    console.log(treeCount);




}

main();




