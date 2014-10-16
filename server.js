var express = require('express');
var server = express();

server.get('/', function(request, response){
  response.send('hello world');
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
});



