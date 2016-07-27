class CompareNumber {

    static compareNumber(originNumber, guessNumber) {
        const originnumber = originNumber.split('');
        const guessnumber = guessNumber.split('');
        let a = 0;
        let  b = 0 ;
        originnumber.forEach(num=> {
            const index = originnumber.indexOf(num);
            if (num === guessnumber[index]) {
                a++;
            }
            else if (guessnumber.find(a=>a === num)) {
                b++;
            }
        });
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;