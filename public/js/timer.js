function _timer(callback) {
  var mode = 1; //mode: count up/down
    
//starts timer w/1s interval using 'timer.start(1000)'' 
  this.start = function(interval) {
  interval = 1000;
  if(status == 0) {
    status = 1;
    timer_id = setInterval(function() {
    switch(mode) {
    default:
    if(time) {
      time--;
      generateTime();
      if(typeof(callback) === 'function') callback(time);
        }
        break;
        case 1:
        if(time < 86400) {
          time++;
          generateTime();
          if(typeof(callback) === 'function') callback(time);
            }
            break;
            }
            }, interval);
        }
    }
    
    this.reset =  function(sec) { //reset timer
      time = 0;
      generateTime(time);
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        var hour = Math.floor(time / 3600) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        //$('div.timer span.second').html(second);
        //$('div.timer span.minute').html(minute);
        //$('div.timer span.hour').html(hour);
    }
}


$(document).ready(function(e) { //actual
  timer = new _timer(
  function(time) {
    if(time == 0) {
      timer.stop();
    }
  });
  timer.reset(0);
  timer.start();
});
