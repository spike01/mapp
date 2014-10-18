pickColour = require('../../src/colourPicker.js').pickColour

describe("Colour setter", function() {

  it("should return 'yellow' when given a positive value", function() {
    expect(pickColour(happyTweet.sentiment)).toEqual('yellow')
  })

  it("should return 'red' when given a negative value", function() {
    expect(pickColour(sadTweet.sentiment)).toEqual('red')
  })

  it("should return '#54A6E4' when given 0", function() {
    expect(pickColour(weirdTweet.sentiment)).toEqual('#54A6E4')
  })

})