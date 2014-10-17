var twitModule = require('./mockTwit.js')
var tweet = require('./mockTweet.js')

describe("tweetStream", function() {

  it("opens a stream", function() { 
    expect(twitModule.openStream()).toEqual(tweet)
  })

  it("closes a stream", function() {
    expect(twitModule.closeStream()).toBeCalled
  })

  it("reopens a stream", function() {
    expect(twitModule.reopenStream()).toBeCalled
    twitModule.closeStream()
  })

  describe("reports the current status correctly", function() {

    it("begins false", function() {
      expect(twitModule.currentStatus()).toBe(false)
    })

    it("true after openStream()", function() {
      twitModule.openStream()
      expect(twitModule.currentStatus()).toBe(true)
    })

    it("false after closeStream()", function() {
      twitModule.closeStream()
      expect(twitModule.currentStatus()).toBe(false)
    })

    it("true after reopenStream()", function() {
      twitModule.reopenStream()
      expect(twitModule.currentStatus()).toBe(true)
      twitModule.closeStream()
    })
  })
    
})
