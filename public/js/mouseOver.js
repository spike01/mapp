var mouseCanvas = document.getElementById('map');

function getMousePos(canvas, evt) {
  var rect = mouseCanvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}

var mouseCoords = [];

mouseCanvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(mouseCanvas, evt);
  mouseCoords = [Math.round(mousePos.x/10), Math.round(mousePos.y/10)]
  dataStore.forEach(function(coords) {
    if(Math.round(coords[0]) === mouseCoords[0]) {
      if(Math.round(coords[1]) === mouseCoords[1]) {
        console.log('gotcha');
      }
    }
  });
});
  
var map = document.getElementById("map")

map.setAttribute("width", width);
map.setAttribute("height", height);
