describe("Formatter", function(){

  it("should output the text value of a tweet", function() {
    expect(format(unformattedTweet).text).toEqual(unformattedTweet.text);
  })

  it("should output the coordinates of a tweet", function() {
    expect(format(unformattedTweet).coords).toEqual(unformattedTweet.geo.coordinates);
  })

  it("should output the language of a tweet", function() {
    expect(format(unformattedTweet).lang).toEqual(unformattedTweet.lang);
  })

  it("should output a sentiment value of 0", function() {
    expect(format(unformattedTweet).sentiment).toEqual(0);
  })

})