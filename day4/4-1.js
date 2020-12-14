const fs = require('fs');

const setupInputData = () => {
    const data = fs.readFileSync('./input.txt', {encoding: 'utf8' });
    return cleanData(data);
}

const cleanData = (data) => {
    var separators = [' ', '\n'];
    const cleanData = data.split('\n\n').map(dat => dat.split(new RegExp(separators.join('|'), 'g')));
    return convertToObj(cleanData);
}

const convertToObj = (data) => {
    return data.map(array => {
        const passport = {}
        array.forEach(passportEntry => {
            const keyValuePair = passportEntry.split(':');
            passport[keyValuePair[0]] = keyValuePair[1]
        })
        return passport
    })
}

const checkPassport = (passport) => {
    const fieldsToCheck = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    const keys = Object.keys(passport);
    return fieldsToCheck.map(field => {
        return keys.indexOf(field) >= 0;
    }).every(check => check)

}

const main = () => {
    const convertedInput = setupInputData();
    return convertedInput.map(passport => checkPassport(passport)).filter(valid => valid).length;
}

console.log(main());
