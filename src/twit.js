var Twit = require('twit')

var auth = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_OAUTH_TOKEN,
      access_token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET
  });

var stream;
var currentStatus = false

this.openStream = function () {
  stream = auth.stream('statuses/sample')
  stream.on('tweet', function(tweet) { 
    return tweet
  })
  currentStatus = true
  console.log('Stream opened')
};

this.closeStream = function () {
  stream.stop()
  currentStatus = false
  console.log('Stream closed')
};

this.reopenStream = function () {
  stream.start()
  currentStatus = true
  console.log('Stream reopened')
};

this.currentStatus = function () {
  return currentStatus
}






