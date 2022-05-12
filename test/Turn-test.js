const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
    let newCard, newTurn;
    beforeEach(() => {
        newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        newTurn = new Turn('pug', newCard);
    });

    it('should be a function', function(){
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function(){
      expect(newTurn).to.be.an.instanceof(Turn);
    });

    it('should store a guess', function(){
        expect(newTurn.guess).to.equal('pug');
    });

    it('should store a card', function(){
        expect(newTurn.card).to.be.an.instanceof(Card);
        expect(newTurn.card).to.equal(newCard);
    });

    it('should return a guess', function(){
        expect(newTurn.returnGuess()).to.equal('pug');
    });

    it('should return a card', function(){
        expect(newTurn.returnCard()).to.equal(newCard);
    });

    it('should evaluate if guess is correct', function(){
        expect(newTurn.evaluateGuess()).to.equal(false);
    });

    it('should give feedback', function(){
        expect(newTurn.giveFeedback()).to.equal('incorrect!');
    });

});