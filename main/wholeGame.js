const AnswerGenerator = require('./answerGenerator');
const CompareNumber = require('./CompareNumber');
const stdin = require('mock-stdin');
class wholeGame {
    constructor() {
        this.count = 6;
        this.answer = AnswerGenerator.generate();

        const isUnique = (item, index, array) => {
            return index === array.lastIndexOf(item);
        };

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        console.log(this.answer);
        console.log('Welcome!\n');
        console.log(`Please input your number(${this.count}):`);

        process.stdin.on('data', (input)=> {
            const isRepeat = input.split('').every(isUnique);
            if (!isRepeat) {
                console.log('Cannot input duplicate numbers!');
                console.log(`Please input your number(${this.count}):`);
            } else if (this.answer === input.trim()) {
                console.log('Congratulations!');
                process.exit();
            } else {
                let text = CompareNumber.compareNumber(this.answer, input);

                console.log(text);
                this.count--;
                if (this.count === 0) {
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                }else
                console.log(`Please input your number(${this.count}):`);
            }
        });
    }
}

new wholeGame();
module.exports = wholeGame;