formatTweet = require('../../src/tweetFormatter.js').formatTweet

describe("tweetFormatter", function() {

  it("outputs the text value of a tweet", function() {
    expect(formatTweet(unformattedTweet).text).toEqual(unformattedTweet.text);
  })

  it("outputs the coordinates of a tweet so that there are no negative values", function() {
    expect(formatTweet(unformattedTweet).coords).toEqual([ 63.84097, 207.92473 ]);
  })

  it("outputs the language of a tweet", function() {
    expect(formatTweet(unformattedTweet).lang).toEqual(unformattedTweet.lang);
  })

})
