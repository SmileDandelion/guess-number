const CompareNumber = require('./CompareNumber');
const answerGenerator = require('./answerGenerator');
class Guess{
    static guess(input){
        const answer = answerGenerator.generate();
        const result = CompareNumber.compareNumber(answer,input);
        return result;
    }
}

module.exports = Guess;