var dataStore = [];
var canvas, x, y, tweetNumber = 0, width, height, ratio, radius;

window.onload = window.onresize = function() {

  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  width = viewportWidth;
  height = viewportWidth / 2;
  ratio = viewportWidth / 360;
  radius = viewportWidth / 1000;

  x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

  canvas = d3.select("#map")
    .attr("width", width)
    .attr("height", height)
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 8]).on("zoom", zoom))
    .node().getContext("2d")

    $('#tweetCount').css('top', height-100 + "px")
    $('#reset').css('top', height-97 + "px")
    $('#stopConnection').css('top', height-97 + "px")
    $('#startConnection').css('top', height-97 + "px")

    zoom()

}

function canvasReset() {
  canvas.clearRect(0, 0, width, height);
}

function zoom() {
  canvasReset();
  draw();
}


function draw() {
  var i = -1, n = dataStore.length, d, cx, cy;
  while (++i < n) {
    canvas.beginPath();
    d = dataStore[i];
    cx = x(d[0]*ratio);
    cy = y(d[1]*ratio);
    canvas.fillStyle = d[2] 
      canvas.moveTo(cx, cy)
      canvas.arc(cx, cy, radius, 0, 2 * Math.PI);
    canvas.fill()
      canvas.closePath();
  }
}

function addData(data) {
  dataStore[dataStore.length] = [(data.coords[1]), (data.coords[0]), data.colour] 
} ;

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
