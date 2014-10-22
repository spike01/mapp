var counter = 0;
var tweetRate = 30;
var fadeSpeed = 1000;
var ready = true;
var onOff = 0;

function streamDisplay(data) {
	counter += 1
	if (counter % tweetRate === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('.tweetStreamDisplay ul').fadeOut(fadeSpeed, function() {
			//console.log(this);
			$(this).remove();
		});
		}
    }


$('#fastSlow').on('click', function() {
	onOff += 1
	if (onOff % 2 === 0) {
		$('#fastSlow').text('Faster');
		fadeSpeed = 4000;
		tweetRate = 150; }
	else {
		$('#fastSlow').text('Slower');
		fadeSpeed = 1000;
		tweetRate = 10; }
});

// $('#fast').on('click', function() {
// 	fadeSpeed = 1000;
// 	tweetRate = 10;
// });

function streamDisplayReset() {
    $('.tweetStreamDisplay ul').empty();
}

