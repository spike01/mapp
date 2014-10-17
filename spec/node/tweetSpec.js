sampleTweet = require('./specHelper.js')

describe("Tweet", function(){

  it("should not be empty", function(){
    expect(sampleTweet.unformattedTweet).not.toEqual(null);
  });

  it("should have a value for text", function(){
    expect(sampleTweet.unformattedTweet.text).toEqual('Mine &gt; Cheeseboysa "@Blaklez: iG: Blaklez_SA"')
  });

  it("should have a value for coordinates", function(){
    expect(sampleTweet.unformattedTweet.geo.coordinates).toEqual([ -26.15903, 27.92473 ])
  });

  it("should have a value for language", function(){
    expect(sampleTweet.unformattedTweet.lang).toEqual('somethingunlikely')
  });

});
