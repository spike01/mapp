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

server.get('/helloworld', function(request, response){
  response.render('index2');
});

io.on('connection', function(socket) { 
  console.log("socket.io server created")
  tweetStream.openStream();
  globalEmitter.on('tweet', function(object) {
  	var formattedObject, strippedObject, sentiment, socketObject;
    formattedObject = formatTweet(object);
    strippedObject = stripPunctuationOf(formattedObject);
    sentiment = analyseSentiment(strippedObject);
    formattedObject.colour = pickColour(sentiment);
    socketObject = stripForSocket(formattedObject);
    console.log(socketObject)
    socket.emit('object', socketObject);
  });

  socket.on('disconnect', function() {
    tweetStream.closeStream();
  })
});

port = process.env.PORT || 3000;

http.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port " + port);
});
