exports.pickColour = function(sentiment) {
	var colour = 0.0;
	sentiment = Math.round(((sentiment + 5.0) / 10.0) * 255);
  colour = _rgbToHex(255, sentiment, 0);
  return colour;
};

//private

function _componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function _rgbToHex(r, g, b) {
    return "#" + _componentToHex(r) + _componentToHex(g) + _componentToHex(b);
}
