describe("wordCounter", function() {

	var mockData = { coords: [ 126.62149099999999, 92.691969 ],
  		colour: '#ffb300',
  		moodWords: { pretty: 1, good: 3 } }

	it("should return the tweet's words and their corresponding mood and frequency", function() {
		wordCounter(mockData)
		expect(wordAccumulator).toEqual({ pretty: { sent: 1, freq: 1 },
											good: { sent: 3, freq: 1 }
										});
	});

	//it("")
});