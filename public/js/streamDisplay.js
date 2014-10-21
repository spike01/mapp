var counter = 0;

function streamDisplay(data) {
	counter += 1;
	if (counter % 300 === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('.tweetStreamDisplay ul').fadeIn("slow");
			$('.tweetStreamDisplay li:gt(0)').fadeOut(500, function(){
        this.remove();
      });
  }	
}

function streamDisplayReset() {
    $('.tweetStreamDisplay ul').empty();
}

