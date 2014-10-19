var express = require('express');
var server = express();
var format = require('./src/formatter.js').format;
var strip = require('./src/stripper.js').strip;
var analyseSentiment = require('./src/sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./src/colourPicker.js').pickColour;
var globalEmitter = require('./src/globalEmitter.js');
var http = require('http').Server(server);
var io = require('socket.io')(http);

var tweetStream = require('./src/twit.js');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.render('index');
});

io.on('connection', function(socket) { 
  tweetStream.openStream();
  globalEmitter.on('tweet', function(object) {
    var strippedObject = strip(format(object));
    strippedObject.sentiment = analyseSentiment(strippedObject);
    strippedObject.colour = pickColour(strippedObject.sentiment);
    socket.emit('object', strippedObject)
  });
})

server.listen(3000, function(){
  console.log("Listening on port 3000");
});