class CompareNumber{
    constructor(){
        this.numberA = 0;
        this.numberB = 0;
    }
    const compareNumber=(originNumber,guessNuber)=>{
        const originNumber = originNumber.split('');
        const guessNumber = guessNuber.split('');
        originNumber.forEach(num=>{
            const index = originNumber.indexOf(num);
            if(num === guessNumber[index]){
                this.numberA++;
            }
            else if(guessNumber.find(a=>a===num)){
                this.numberB++;
            }
        });
        return `${this.numberA}A${this.numberB}B`;
    }
}

module.exports = CompareNumber;