var express = require('express');
var server = express();
var format = require('./src/formatter.js').format;
var stripPunctuationOf = require('./src/punctuationStripper.js').stripPunctuationOf;
var analyseSentiment = require('./src/sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');
var http = require('http').Server(server);
var io = require('socket.io')(http);
var stripForSocket = require('./src/socketStripper.js').stripForSocket;

var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.render('index');
});

io.on('connection', function(socket) { 
  tweetStream.openStream();
  globalEmitter.on('tweet', function(object) {
  	var formattedObject, strippedObject, socketObject;
    formattedObject = format(object);
    strippedObject = stripPunctuationOf(formattedObject);
    formattedObject.sentiment = analyseSentiment(strippedObject);
    formattedObject.colour = pickColour(formattedObject.sentiment);
    socketObject = stripForSocket(formattedObject);
    socket.emit('object', socketObject);
  });
});

http.listen(3000, function(){
  console.log("Listening on port 3000");
});