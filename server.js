var express = require('express');
var server = express();
var format = require('./src/formatter.js').format;
var strip = require('./src/stripper.js').strip;
var sentimentAnalysis = require('./src/sentimentAnalysis.js');
var sentimentLookup = require('./src/sentiments/sentimentLookup.js');
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');

var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.render('index');
});

tweetStream.openStream();

globalEmitter.on('tweet', function(tweet) {
   console.log(tweet);
});


// setInterval(console.log(tweetStream.catcher(), 10));

server.listen(3000, function(){
  console.log("Listening on port 3000");
});