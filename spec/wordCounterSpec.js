describe("wordCounter", function() {

	var mockData = { coords: [ 126.62149099999999, 92.691969 ],
  		colour: '#ffb300',
  		moodWords: { pretty: 1, good: 3 } }

	it("should return the tweet's words and their mood", function() {
		expect(wordCounter(mockData)).toEqual({ pretty: 1, good: 3 });
	});
});