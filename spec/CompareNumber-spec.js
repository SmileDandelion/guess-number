const getResult = require('../main/CompareNumber');
describe('Compare Number ', ()=> {
    it('returns xAxB', ()=> {
        [{
            input: '1234',
            answer: '5678',
            result: '0A0B'
        }, {
            input: '1234',
            answer: '1234',
            result: '4A0B'
        }, {
            input: '1234',
            answer: '1243',
            result: '2A2B'
        }].forEach(example=>{
            expect(getResult.compareNumber(example.input,example.answer)).toEqual(example.result);
        });
    });
});
