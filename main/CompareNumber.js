class CompareNumber {

    static compareNumber(originNumber, guessNumber) {
        const originnumber = originNumber.split('');
        const guessnumber = guessNumber.split('');
        // let a = 0;
        // let b = 0;
        // originnumber.forEach(num=> {
        //     // const index = originnumber.indexOf(num);
        //     // if (num === guessnumber[index]) {
        //     //     a++;
        //     // }
        //     if (originnumber.indexOf(num) === guessnumber.indexOf(num)) {
        //         a++;
        //     }
        //     else if (guessnumber.find(a=>a === num)) {
        //         b++;
        //     }
        // });
        const rightDegitCount = guessnumber.filter(a=>originnumber.includes(a)).length;
        const a = guessnumber.filter(a=>guessnumber.indexOf(a) === originnumber.indexOf(a)).length;
        const b = rightDegitCount-a;
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;