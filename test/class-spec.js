const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {

      let word = new Word('word');

      expect(word).to.equal(word)
    });
  
    it('should set the "word" property when a new word is created', function () {

      let word = new Word('word');
      expect(word).to.hasOwnProperty("word");

    });
  });





  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      let testWord = new Word('RemovingWowels')
      expect(testWord.removeVowels()).to.eql('RmvngWwls');
    });
  });




  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      let testWord = new Word('apples')
      expect(testWord.removeConsonants()).to.eql('ae');


    });
  });
  




  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {


      let testWord = new Word('ego')
      let testWord2 = new Word('coyote')

      expect(testWord.pigLatin()).to.eql('egoyay');
      expect(testWord2.pigLatin()).to.equal('oyotecay')



    });
  });
});