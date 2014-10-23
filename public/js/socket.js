var stopped = true;

$(document).ready(function(){

  var socket = io.connect('/');

  socket.on('object', function(data){
    streamDraw(data);
    streamDisplay(data);
  })

  setTimeout(function(){
    $('#click-play').css('opacity', '1.0');
  }, 4000)

  $('#reset').on('click', function(){
    stopped = true;
    tweetNumber = 0;
    _clearTweetNumber();
    streamDisplayReset();
    canvasReset();
    dataStore = [];
    $('#overlay-text').css('opacity', '1.0');
    $('#overlay-text').html('<br><br><p>Press play to start the map again.</p>')
  })

  $('#stopConnection').on('click', function(){
    stopped = true;
  })

  $('#startConnection').on('click', function(){
    stopped = false;
    $('#overlay-text').css('opacity', '0');
    $('#tweetStreamDisplay').css('opacity', '1.0');
    $('.legend-container').css('opacity', '1.0');
    $('#instructions').css('opacity', '1.0');
    $('#about').css('opacity', '1.0');
  })

})

function _clearTweetNumber() {
  $('#tweetNumber').text(tweetNumber + ' ');
}
