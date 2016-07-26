'use strict';
const getResult = require('../main/app');
describe('getResult ',()=>{
    it('can get the right number AB',()=>{
        expect(getResult('1234','1234')).toEqual('4A0B');
        expect(getResult('1234','4321')).toEqual('0A4B');
    });
});
