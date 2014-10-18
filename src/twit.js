var Twit = require('twit')
var globalEmitter = require('./globalEmitter.js');


var auth = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_OAUTH_TOKEN,
      access_token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET
  });

var stream;
var isOpen = false
var world = ['-180','-90','180','90'];

exports.openStream = function () {
  stream = auth.stream('statuses/filter', { locations: world });
  stream.on('tweet', function(tweet) {
    if(tweet.geo != null) {
      globalEmitter.emit("tweet", tweet);
    }
  });

  isOpen = true
  console.log('Stream opened')
};

exports.closeStream = function () {
  stream.stop()
  isOpen = false
  console.log('Stream closed')
};

exports.reopenStream = function () {
  stream.start()
  isOpen = true
  console.log('Stream reopened')
};

exports.isOpen = function () {
  return isOpen
}