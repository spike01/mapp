var express = require('express');
var server = express();
var tweetStream = require('./lib/twit/Twit.js')

server.get('/', function(request, response){
  response.send('hello world');
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
});

tweetStream.stopStream()
tweetStream.startStream()
tweetStream.openStream()
tweetStream.currentStatus()
