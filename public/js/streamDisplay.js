var counter = 0;

function streamDisplay(data) {
	counter += 1;
	if (counter % 20 === 0) {
		var text = data.text;
		var username = data.username;
		$('.tweetStreamDisplay ul').prepend('<li>' + '<b>@' + username + '</b> ' + text + '</li>');

	}


}