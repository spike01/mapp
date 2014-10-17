describe("analyseSentiment", function() {

	it("should change the sentiment of a tweet to 1 when its text includes the word 'accepting'", function() {
		analyseSentiment(acceptingTweet);
		expect(acceptingTweet.sentiment).toEqual(1);
	});

	it("should change the sentiment of a tweet to 3 when its text includes 'happy'", function() {
		analyseSentiment(happyTweet);
		expect(happyTweet.sentiment).toEqual(3);
	})

	it("should change the sentiment of a tweet to -2 when its text includes 'sad'", function() {
		analyseSentiment(sadTweet);
		expect(sadTweet.sentiment).toEqual(-2);
	})

	it("sentiment of a tweet should be 0 if its text includes 'torture', 'happy', and 'accepting'", function() {
		analyseSentiment(weirdTweet);
		expect(weirdTweet.sentiment).toEqual(0)
	})

	it("should look up the tweet's language for analysis", function() {
		analyseSentiment(pissedOffSpanishTweet);
		expect(pissedOffSpanishTweet.sentiment).toEqual(-3);
	})
});