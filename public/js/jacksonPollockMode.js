function jacksonPollockMode() {
  return _rgbToHex(crazy(), crazy(), crazy());
}

function crazy() {
  return Math.round(Math.random()*255);
}

//private

function _componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function _rgbToHex(r, g, b) {
    return "#" + _componentToHex(r) + _componentToHex(g) + _componentToHex(b);
}
