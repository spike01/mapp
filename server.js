var express = require('express');
var server = express();
var formatTweet = require('./src/tweetFormatter.js').formatTweet;
var stripPunctuationOf = require('./src/punctuationStripper.js').stripPunctuationOf;
var analyseSentiment = require('./src/sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');
var http = require('http').Server(server);
var io = require('socket.io').listen(http);
var stripForSocket = require('./src/socketStripper.js').stripForSocket;
var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.render('index');
});

var connections = 0;

io.on('connection', function(socket) { 
  console.log("socket.io server created");
  if (connections === 0 ) { tweetStream.openStream(); }
    connections += 1;
    console.log('User connected.');
    globalEmitter.on('tweet', function(object) {
    var formattedObject, strippedObject, sentiment, socketObject;
    formattedObject = formatTweet(object);
    strippedObject = stripPunctuationOf(formattedObject);
    sentiment = analyseSentiment(strippedObject);
    formattedObject.colour = pickColour(sentiment.averageSentiment);
    socketObject = stripForSocket(formattedObject);
    socketObject.moodWords = sentiment.moodWords;
    //console.log(socketObject);
    socket.emit('object', socketObject);
  });

  socket.on('disconnect', function() {
    connections -= 1;
    console.log('User disconnected.');
    if (connections === 0) { tweetStream.closeStream(); }
  });
});

var port = process.env.PORT || 3000;

http.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port " + port);
});
