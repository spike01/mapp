pickColour = require('../../src/colourPicker.js').pickColour

describe("Colour setter", function() {

  it("returns 'yellow' when given a positive value", function() {
    expect(pickColour(4)).toEqual('yellow')
  })

  it("returns 'red' when given a negative value", function() {
    expect(pickColour(-2)).toEqual('red')
  })

  it("returns '#54A6E4' when given 0", function() {
    expect(pickColour(0)).toEqual('#54A6E4')
  })

})
