var stopped = true;

$(document).ready(function(){

  var socket = io.connect('/');

  socket.on('object', function(data){
    streamDraw(data);
    streamDisplay(data);
  })

  $('#reset').on('click', function(){
    stopped = true;
    tweetNumber = 0;
    _clearTweetNumber();
    streamDisplayReset();
    canvasReset();
    dataStore = [];
  })

  $('#stopConnection').on('click', function(){
    stopped = true;
  })

  $('#startConnection').on('click', function(){
    stopped = false;
    $('#intro').css('opacity', '0');
    $('.tweetStreamDisplay').css('opacity', '1.0');
    $('#fastSlow').css('opacity', '1.0');
  })

})

function _clearTweetNumber() {
  $('#tweetNumber').text(tweetNumber + ' ');
}
