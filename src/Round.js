const Turn = require('../src/Turn');

class Round{
    constructor(deck){
        this.deck  = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard(){
        return this.deck.deck[this.turns];
    }

    takeTurn(guess){
        const turn = new Turn(guess, this.returnCurrentCard());
        this.turns++;
        if(turn.evaluateGuess() === false){
            this.incorrectGuesses.push(turn.card.id);
            return turn.giveFeedback();
        } else{
            return turn.giveFeedback();
        }
    }

    calculatePercentCorrect(){
        return (this.incorrectGuesses.length/this.turns) * 100;
    }

    endRound(){
        const amount = this.calculatePercentCorrect();
        return `** Round over! ** You answered ${amount}% of the questions correctly!`;
    }
}

module.exports = Round;