var stopped = false;

$(document).ready(function(){

  var socket = io.connect('/');

  socket.on('object', function(data){
    streamDraw(data);
    streamDisplay(data);
  })

  $('#reset').on('click', function(){
    tweetNumber = 0;
    stopped = true;
    $('#tweetNumber').text(tweetNumber + ' ');
    canvasReset();
    dataStore = [];
  })

  $('#stopConnection').on('click', function(){
    stopped = true;
  })

  $('#startConnection').on('click', function(){
    stopped = false;
  })

})