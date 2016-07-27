const AnswerGenerator = require('../main/answerGenerator');
const Guess = require('../main/Guess');
describe('Guess', ()=> {
    it('should play the game', ()=> {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        expect(Guess.guess('1234')).toEqual('4A0B');
    });
});