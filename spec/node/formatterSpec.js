format = require('../../src/formatter.js').format

describe("Formatter", function() {

  it("outputs the text value of a tweet", function() {
    expect(format(unformattedTweet).text).toEqual(unformattedTweet.text);
  })

  it("outputs the coordinates of a tweet so that there are no negative values", function() {
    expect(format(unformattedTweet).coords).toEqual([ 63.84097, 207.92473 ]);
  })

  it("outputs the language of a tweet", function() {
    expect(format(unformattedTweet).lang).toEqual(unformattedTweet.lang);
  })

})
