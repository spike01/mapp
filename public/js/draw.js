var dataStore = [];
var canvas, d, cx, cy, x, y, ratio, radius, stopped, tweetNumber = 0;

function draw() {
  var i = -1, n = dataStore.length, d, cx, cy;
  while (++i < n) {
    canvas.beginPath();
    d = dataStore[i];
    cx = x(d[0]*ratio);
    cy = y(d[1]*ratio);
    canvas.fillStyle = d[2];
    canvas.moveTo(cx, cy);
    canvas.arc(cx, cy, radius, 0, 2 * Math.PI);
    canvas.fill();
    canvas.closePath();
  }
}

function addData(data) {
  dataStore[dataStore.length] = [(data.coords[1]), (data.coords[0]), data.colour];
} 

function streamDraw(data) {
  if(stopped === false) {
    addData(data);
    tweetNumber += 1;
    $('#tweetNumber').text(tweetNumber + ' ');
    canvas.beginPath();
    var cx = x((data.coords[1]*ratio));
    var cy = y((data.coords[0])*ratio);
    canvas.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    canvas.fillStyle = data.colour;
    canvas.fill();
    canvas.closePath();
  }
}
