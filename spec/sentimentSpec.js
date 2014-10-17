describe("analyseSentiment", function() {

	it("should return 1 when text includes 'accepting'", function() {
		expect(analyseSentiment(acceptingTweet.text, acceptingTweet.lang)).toEqual(1);
	});

	it("should return 3 when text includes 'happy'", function() {
		expect(analyseSentiment(happyTweet.text, happyTweet.lang)).toEqual(3);
	})

	it("should return -2 when text includes 'sad'", function() {
		expect(analyseSentiment(sadTweet.text, sadTweet.lang)).toEqual(-2);
	})

	it("should return 0 if text includes 'torture', 'happy', and 'accepting'", function() {
		expect(analyseSentiment(weirdTweet.text, weirdTweet.lang)).toEqual(0)
	})

	it("can analyse a Spanish tweet", function() {
		expect(analyseSentiment(pissedOffSpanishTweet.text, pissedOffSpanishTweet.lang)).toEqual(-3);
	})

	it("can analyse a Turkish tweet", function() {
		expect(analyseSentiment(turkishTweet.text, turkishTweet.lang)).toEqual(-3);
	})

});
