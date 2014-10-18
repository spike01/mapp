var twitModule = require('./mocks/mockTwit.js')
var tweet = require('./mocks/mockTweet.js')

describe("tweetStream", function() {

  it("opens a stream", function() { 
    expect(twitModule.openStream()).toEqual(tweet)
  })

  it("closes a stream", function() {
    expect(twitModule.closeStream()).toBeCalled
  })

  it("reopens a stream", function() {
    expect(twitModule.reopenStream()).toBeCalled
  })

  describe("reports the current status correctly", function() {

    beforeEach(function(){
      twitModule.closeStream()
    })

    it("begins false", function() {
      expect(twitModule.isOpen()).toBe(false)
    })

    it("true after openStream()", function() {
      twitModule.openStream()
      expect(twitModule.isOpen()).toBe(true)
    })

    it("false after closeStream()", function() {
      twitModule.closeStream()
      expect(twitModule.isOpen()).toBe(false)
    })

    it("true after reopenStream()", function() {
      twitModule.reopenStream()
      expect(twitModule.isOpen()).toBe(true)
      twitModule.closeStream()
    })
  })
})
