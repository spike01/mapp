stripPunctuationOf = require('../../src/punctuationStripper.js').stripPunctuationOf

describe('stripPunctuationOf', function() {

	it("returns an object containing a key for words", function() {
		expect(stripPunctuationOf(weirdTweet).words).toBeDefined();
	});

	it("strips punctuation from the text", function() {
		expect(stripPunctuationOf(lotsOfPunctuation).words).toEqual([ '', 'hell', 'death', 'hel', 'lo' ]);
	});

	it("returns the language of the tweet", function() {
		expect(stripPunctuationOf(happyTweet).lang).toEqual('en');
	});


});
