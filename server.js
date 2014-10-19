var express = require('express');
var server = express();
var format = require('./src/formatter.js').format;
var stripPunctuationOf = require('./src/stripper.js').stripPunctuationOf;
var analyseSentiment = require('./src/sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');
var http = require('http').Server(server);
var io = require('socket.io')(http);
var socketStripper = require('./src/socketStripper.js').socketStripper;

var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.render('index');
});

io.on('connection', function(socket) { 
  tweetStream.openStream();
  globalEmitter.on('tweet', function(object) {
  	formattedObject = format(object);
    var strippedObject = stripPunctuationOf(formattedObject);
    formattedObject.sentiment = analyseSentiment(strippedObject);
    formattedObject.colour = pickColour(formattedObject.sentiment);
    var socketStrippedObject = socketStripper(formattedObject);
    socket.emit('object', socketStrippedObject);
  });
});

http.listen(3000, function(){
  console.log("Listening on port 3000");
});