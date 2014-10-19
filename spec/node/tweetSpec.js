describe("Tweet", function(){

  it("is not empty", function(){
    expect(unformattedTweet).not.toEqual(null);
  });

  it("has a value for text", function(){
    expect(unformattedTweet.text).toEqual('Mine &gt; Cheeseboysa "@Blaklez: iG: Blaklez_SA"')
  });

  it("has a value for coordinates", function(){
    expect(unformattedTweet.geo.coordinates).toEqual([ -26.15903, 27.92473 ])
  });

  it("has a value for language", function(){
    expect(unformattedTweet.lang).toEqual('en')
  });

});
