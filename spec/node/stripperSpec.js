strip = require('../../src/stripper.js').strip

describe('Stripper', function() {

	it("has a key for words", function() {
		expect(strip(weirdTweet).words).toBeDefined();
	});

	it("strips punctuation from the text", function() {
		expect(strip(lotsOfPunctuation).words).toEqual([ '', 'hell', 'death', 'hel', 'lo' ]);
	});

	it("returns the language of the tweet", function() {
		expect(strip(happyTweet).lang).toEqual('en');
	});


});
