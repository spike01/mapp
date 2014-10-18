analyseSentiment = require('../../src/sentimentAnalysis.js').analyseSentiment
sentimentLookup = require('../../src/sentiments/sentimentLookup.js').sentimentLookup

describe("analyseSentiment", function() {

	it("should return 1 when text includes 'accepting'", function() {
		expect(analyseSentiment(mockAccepting)).toEqual(1);
	});

	it("should return 3 when text includes 'happy'", function() {
		expect(analyseSentiment(mockHappy)).toEqual(3);
	})

	it("should return -2 when text includes 'sad'", function() {
		expect(analyseSentiment(mockSad)).toEqual(-2);
	})

	it("should return 0 if text includes 'torture', 'happy', and 'accepting'", function() {
		expect(analyseSentiment(mockWeird)).toEqual(0)
	})

	it("can analyse a Spanish tweet", function() {
		expect(analyseSentiment(mockSpanish)).toEqual(-3);
	})

	it("can analyse a Turkish tweet", function() {
		expect(analyseSentiment(mockTurkish)).toEqual(-3);
	})

});
