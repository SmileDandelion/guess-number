const CompareNumber = require('./CompareNumber');
function getResult(originNumber, guessNuber) {
    const compareNumber = CompareNumber.compareNumber(originNumber, guessNuber);
    return compareNumber;
}
module.exports = getResult;