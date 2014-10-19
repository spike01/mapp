pickColour = require('../../src/colourPicker.js').pickColour

describe("Colour setter", function() {

  it("returns 'yellow' when given a positive value", function() {
    expect(pickColour(happyTweet.sentiment)).toEqual('yellow')
  })

  it("returns 'red' when given a negative value", function() {
    expect(pickColour(sadTweet.sentiment)).toEqual('red')
  })

  it("returns '#54A6E4' when given 0", function() {
    expect(pickColour(weirdTweet.sentiment)).toEqual('#54A6E4')
  })

})
