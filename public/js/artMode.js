function artMode() {
  return _rgbToHex(_crazy(), _crazy(), _crazy());
}

//private

function _componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function _rgbToHex(r, g, b) {
    return "#" + _componentToHex(r) + _componentToHex(g) + _componentToHex(b);
}

function _crazy() {
  return Math.round(Math.random()*255);
}