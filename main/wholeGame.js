const AnswerGenerator = require('./answerGenerator');
const CompareNumber = require('./CompareNumber');
const scanf = require('scanf');
class wholeGame {
    static game() {
        const isUnique = (item, index, array) => {
            return index === array.lastIndexOf(item);
        };
        console.log('Welcome!' + '\n');
        const answer = AnswerGenerator.generate();
        console.log(answer);
        for (var i = 0; i < 6; i++) {
            console.log(`Please input your number(${6-i}): `);
            const input = scanf('%s');
            const isRepeat = input.split('').every(isUnique);
            if (!isRepeat) {
                console.log('Cannot input duplicate numbers!');
            } else {
                let text = CompareNumber.compareNumber(answer, input);
                if (text === '4A0B') {
                    console.log('Congratulations!');
                    return;
                }
                else {
                    console.log(text);
                }
            }
        }
        console.log('Game Over');
    }
}

wholeGame.game();
module.exports = wholeGame;