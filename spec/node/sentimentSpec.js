analyseSentiment = require('../../src/sentimentAnalysis.js').analyseSentiment
sentimentLookup = require('../../src/sentiments/sentimentLookup.js').sentimentLookup

describe("analyseSentiment", function() {

  it("doesn't process text with no specified language", function() {
    expect(analyseSentiment(mockNolang)).toEqual(0);
      });

	it("returns 1 when text includes 'accepting'", function() {
		expect(analyseSentiment(mockAccepting)).toEqual(1);
	});

	it("returns 3 when text includes 'happy'", function() {
		expect(analyseSentiment(mockHappy)).toEqual(3);
	})

	it("returns -2 when text includes 'sad'", function() {
		expect(analyseSentiment(mockSad)).toEqual(-2);
	})

	it("returns 0 if text includes 'torture', 'happy', and 'accepting'", function() {
		expect(analyseSentiment(mockWeird)).toEqual(0)
	})

	it("analyses a Spanish tweet", function() {
		expect(analyseSentiment(mockSpanish)).toEqual(-3);
	})

	it("analyses a Turkish tweet", function() {
		expect(analyseSentiment(mockTurkish)).toEqual(-3);
	})

});
