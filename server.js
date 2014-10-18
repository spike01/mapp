var express = require('express');
var server = express();
var tweetStream = require('./src/twit.js');
var format = require('./src/formatter.js').format;
var strip = require('./src/stripper.js').strip;
var sentimentAnalysis = require('./src/sentimentAnalysis.js');
var sentimentLookup = require('./src/sentiments/sentimentLookup.js');
var pickColour = require('./src/colourPicker.js').pickColour;
var events = require('events');
var eventEmitter = new events.EventEmitter();

server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.render('index');
});

tweetStream.openStream();

eventEmitter.on('tweet', function(tweet) {
  console.log(tweet);
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
});