formatter = require('../../src/formatter.js')
sampleTweet = require('./specHelper.js')

describe("Formatter", function() {

  it("should output the text value of a tweet", function() {
    expect(formatter.format(unformattedTweet).text).toEqual(unformattedTweet.text);
  })

  it("should output the coordinates of a tweet so that there are no negative values", function() {
    expect(formatter.format(unformattedTweet).coords).toEqual([ 63.84097, 207.92473 ]);
  })

  it("should output the language of a tweet", function() {
    expect(formatter.format(unformattedTweet).lang).toEqual(unformattedTweet.lang);
  })

  it("should output a sentiment value of 0", function() {
    expect(formatter.format(unformattedTweet).sentiment).toEqual(0);
  })

})
