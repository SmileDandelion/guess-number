class CompareNumber {

    static compareNumber(originNumber, guessNuber) {
        const originnumber = originNumber.split('');
        const guessnumber = guessNuber.split('');
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