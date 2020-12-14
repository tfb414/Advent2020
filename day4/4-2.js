const fs = require('fs');

//Clean input and convert to array of objects
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

//validate data
const isBetween = (year, lowThreshold, highThreshold) => {
    const parsedYear =  parseInt(year);
    return (highThreshold > parsedYear && parsedYear > lowThreshold)
}

const passportValidationRules = {
    byr: function(year) {
        return isBetween(year, 1920, 2002)
    },
    iyr: function(year) {
        return isBetween(year, 2010, 2020)
    },
    eyr: function(year) {
        return isBetween(year, 2020, 2030)
    },
    hgt: function(height) {
        if (height.endsWith('cm')) {
            const cleanedHeight = height.replace('cm', '');
            return isBetween(cleanedHeight, 150, 193);
        }
        const cleanedHeight = height.replace('in', '');
        return isBetween(cleanedHeight, 59, 76);
    },
    hcl: function() {
        return true
    },
    ecl: function() {
        return true
    },
    pid: function() {
        return true;
    }

}


const checkPassport = (passport) => {
    const fieldsToValidate = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    const keys = Object.keys(passport);
    return fieldsToValidate.map(field => {
        if (keys.indexOf(field) >= 0 && passportValidationRules[field]) {
            return !!passportValidationRules[field](passport[field])
        }
        return false;
    }).every(check => check)
}



const main = () => {
    const convertedInput = setupInputData();
    return convertedInput.map(passport => checkPassport(passport)).filter(valid => valid).length;
}

console.log(main());
