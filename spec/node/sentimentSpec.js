analyseSentiment = require('../../src/sentimentAnalysis.js').analyseSentiment
sentimentLookup = require('../../src/sentiments/sentimentLookup.js').sentimentLookup

describe("analyseSentiment", function() {

  it("doesn't process text with no specified language", function() {
    expect(analyseSentiment(mockNolang)).toEqual({ sentiment : 0, moodWords : {} });
      });

	it("returns an array containing arrays containing the text and its mood value when text includes 'accepting'", function() {
		expect(analyseSentiment(mockAccepting)).toEqual({ sentiment : 1, moodWords : {  accepting: 1 } });
	});

	it("returns 3 when text includes 'happy'", function() {
		expect(analyseSentiment(mockHappy)).toEqual({ sentiment : 3, moodWords : { happy : 3 } });
	});

	it("returns -2 when text includes 'sad'", function() {
		expect(analyseSentiment(mockSad)).toEqual({ sentiment : -2, moodWords : { sad : -2 } });
	})

	it("returns 0 if text includes 'torture', 'happy', and 'accepting'", function() {
		expect(analyseSentiment(mockWeird)).toEqual({ sentiment : 0, moodWords : { happy : 3, accepting : 1, torture : -4 } })
	})

	it("analyses a Spanish tweet", function() {
		expect(analyseSentiment(mockSpanish)).toEqual({ sentiment : -3, moodWords : { pendejo : -3 } });
	})

	it("analyses a Turkish tweet", function() {
		expect(analyseSentiment(mockTurkish)).toEqual({ sentiment : -1.5, moodWords : { engel : -2, yok : -1 } });
	})

	// it("")

});
