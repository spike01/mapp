var counter = 0;
var tweetRate = 30;
var fadeSpeed = 1000;
var ready = true;

function streamDisplay(data) {
	counter += 1;
	if (counter % tweetRate === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		if (ready === true) {
			ready = false;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('.tweetStreamDisplay ul').fadeIn(fadeSpeed, function() {
			$(this).fadeOut(fadeSpeed, function() {
				$(this).remove();
				ready = true;
			});
		});
		}
    }
 }	


$('#slow').on('click', function() {
	fadeSpeed = 1000;
	tweetRate = 20;
});

$('#fast').on('click', function() {
	fadeSpeed = 0
	tweetRate = 1
});

function streamDisplayReset() {
    $('.tweetStreamDisplay ul').empty();
}

