strip = require('../../src/stripper.js').strip

describe('Stripper', function() {

	it("should have a key for words", function() {
		expect(strip(weirdTweet).words).toBeDefined();
	});

	it("should strip punctuation from the text", function() {
		expect(strip(lotsOfPunctuation).words).toEqual([ '', 'hell', 'death', 'hel', 'lo' ]);
	});

	it("should return the language of the tweet", function() {
		expect(strip(happyTweet).lang).toEqual('en');
	});


});