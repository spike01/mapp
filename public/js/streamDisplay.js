var counter = 0;

function streamDisplay(data) {
	counter += 1;
	if (counter % 100 === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('.tweetStreamDisplay ul').fadeIn("slow");
			$('ul li:nth-child(3)').css('opacity', '0');
  }	
}

function streamDisplayReset() {
    $('.tweetStreamDisplay ul').empty();
}

