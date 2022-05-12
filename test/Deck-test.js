const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function(){
    let card1, card2, card3, newDeck;
    beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     newDeck = new Deck([card1, card2, card3]);
     });

    it('should be a function', function(){
        expect(Deck).to.be.a('function');
    });
  
    it('should be an instance of Deck', function(){
        expect(newDeck).to.be.an.instanceof(Deck);
    });

    it('should have cards', function(){
        expect(newDeck.deck[0]).to.equal(card1);
    });

    it('should count how many cards are in the deck', function(){
        expect(newDeck.countCards()).to.equal(3);
    });
});