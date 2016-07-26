const CompareNumber = require('./CompareNumber');

function getResult(originNumber, guessNuber) {
    const Comparenumber = CompareNumber.compareNumber(originNumber, guessNuber);
    return Comparenumber;
}
module.exports = getResult;