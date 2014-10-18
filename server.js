var express = require('express');
var server = express();
var format = require('./src/formatter.js').format;
var strip = require('./src/stripper.js').strip;
var analyseSentiment = require('./src/sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');

var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');

server.get('/', function(request, response){
  response.render('index');
});

tweetStream.openStream();

globalEmitter.on('tweet', function(tweet) {
   var strippedTweet = strip(format(tweet));
   tweet.sentiment = analyseSentiment(strippedTweet);
   console.log(tweet.sentiment);
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
});