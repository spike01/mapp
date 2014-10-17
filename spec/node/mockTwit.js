var tweet = require('./mockTweet.js')

var currentStatus = false

this.openStream = function() {
  currentStatus = true
  return tweet
};

this.closeStream = function() {
  currentStatus = false 
};

this.reopenStream = function() {
  currentStatus = true
};

this.currentStatus = function() {
  return currentStatus
};
