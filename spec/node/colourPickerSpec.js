pickColour = require('../../src/colourPicker.js').pickColour

describe("pickColour", function() {

  it("returns 'yellow' when given a positive value", function() {
    expect(pickColour(4)).toEqual('#ffe600')
  })

  it("returns 'red' when given a negative value", function() {
    expect(pickColour(-2)).toEqual('#ff4d00')
  })

  it("returns '#54A6E4' when given 0", function() {
    expect(pickColour(0)).toEqual('#ff8000')
  })

})
