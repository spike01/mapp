var counter = 0;
var tweetRate = 30;
var fadeSpeed = 1000;
var ready = true;

function streamDisplay(data) {
	counter += 1
	if (counter % tweetRate === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('.tweetStreamDisplay ul').fadeOut(fadeSpeed, function() {
			console.log(this);
			$(this).remove();
		});
		}
    }


$('#slow').on('click', function() {
	fadeSpeed = 4000;
	tweetRate = 150;
});

$('#fast').on('click', function() {
	fadeSpeed = 1000;
	tweetRate = 10;
});

function streamDisplayReset() {
    $('.tweetStreamDisplay ul').empty();
}

