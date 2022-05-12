const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
    let card1, card2, card3, newDeck, newRound;
    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        newDeck = new Deck([card1, card2, card3]);
        newRound = new Round(newDeck);
    });

    it('should be a function', function(){
        expect(Round).to.be.a('function');
    });

    it('should have a deck', function(){
        expect(newRound.deck).to.equal(newDeck);
    });

    it('should have 0 turns as default', function(){
        expect(newRound.turns).to.equal(0);
    });

    it('should return current card', function(){
        expect(newRound.returnCurrentCard()).to.equal(card1);
    });

    it('should start with no incorrect guesses', function(){
        expect(newRound.incorrectGuesses).to.deep.equal([]);
    });

    it('should be able to take a turn', function(){
        expect(newRound.takeTurn('sea otter')).to.equal('correct!');
        expect(newRound.takeTurn('spleen')).to.equal('incorrect!');
        expect(newRound.incorrectGuesses).to.deep.equal([14]);
    });

    it('should be able to update turns count', function(){
        expect(newRound.turns).to.equal(0);
        expect(newRound.takeTurn('sea otter')).to.equal('correct!');
        expect(newRound.takeTurn('spleen')).to.equal('incorrect!');
        expect(newRound.turns).to.equal(2);
    });

    it('should be able to store incorrect guesses', function(){
        expect(newRound.takeTurn('sea otter')).to.equal('correct!');
        expect(newRound.takeTurn('spleen')).to.equal('incorrect!');
        expect(newRound.incorrectGuesses).to.deep.equal([14]);
    });

    it('should be able to return current card', function(){
        expect(newRound.takeTurn('sea otter')).to.equal('correct!');
        expect(newRound.returnCurrentCard()).to.equal(card2);
    });

    it('should be able to calculate percentage of correct answers', function(){
        expect(newRound.turns).to.equal(0);
        expect(newRound.takeTurn('sea otter')).to.equal('correct!');
        expect(newRound.takeTurn('spleen')).to.equal('incorrect!');
        expect(newRound.calculatePercentCorrect()).to.equal(50);
    });
});