function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

exports.pickColour = function(sentiment) {
	colour = 0.0;
	sentiment = Math.round(((sentiment + 5.0) / 10.0) * 255);
	//inverseSentiment = 255 - sentiment
    colour = rgbToHex(255, sentiment, 0);
    console.log(sentiment);
    //console.log(inverseSentiment);
    console.log('---' + colour);
  // if(sentiment < 0) {
  // 	sentiment *= -1;
  //   colour = rgbToHex(inverseSentiment, 0, sentiment);
  // } 

  return colour
}