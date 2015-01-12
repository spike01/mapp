var globalEmitter = require('./globalEmitter.js');
var tweetStream = require('./twit.js');
var streamProcess = require('./streamController.js').streamProcess;
var socket = function(io){

io.on('connection', function(socket) { 

    var connections = 0;
    console.log("socket.io server created");
    if (connections === 0 ) { tweetStream.openStream(); }
    connections += 1;
    console.log('User connected');
    globalEmitter.on('tweet', function(object) {
      socketObject = streamProcess(object);
      socket.emit('object', socketObject);
    });

    socket.on('disconnect', function() {
      connections -= 1;
      console.log('User disconnected');
      if (connections === 0) { tweetStream.closeStream(); }
    });
  });
}

module.exports = socket
