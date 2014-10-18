var tweet = require('./mockTweet.js')

var isOpen = false

this.openStream = function() {
  isOpen = true
  return tweet
};

this.closeStream = function() {
  isOpen = false 
};

this.reopenStream = function() {
  isOpen = true
};

this.isOpen = function() {
  return isOpen
};
