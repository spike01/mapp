describe("Tweet", function(){

  it("should not be empty", function(){
    expect(unformattedTweet).not.toEqual(null);
  });

  it("should have a value for text", function(){
    expect(unformattedTweet.text).toEqual('Mine &gt; Cheeseboysa "@Blaklez: iG: Blaklez_SA"')
  });

  it("should have a value for coordinates", function(){
    expect(unformattedTweet.geo.coordinates).toEqual([ -26.15903, 27.92473 ])
  });

  it("should have a value for language", function(){
    expect(unformattedTweet.lang).toEqual('en')
  });

});
