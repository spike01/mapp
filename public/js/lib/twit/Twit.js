var Twit = require('twit')

var tweetStream = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_OAUTH_TOKEN,
  access_token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET
});

module.exports = tweetStream;
