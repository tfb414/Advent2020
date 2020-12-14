const fs = require('fs');

const setupInputData = () => {
    const data = fs.readFileSync('./input.txt', {encoding: 'utf8' });
    return cleanData(data);
}

const cleanData = (data) => {
    return data.split('\n\n').map(dat => dat.split('\n'));
}

console.log(setupInputData());
