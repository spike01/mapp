$(document).ready(function(){
  var socket = io.connect('http://localhost');


  var dataStore = []
  var width = 3600,
  height = 1800;

  var x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

  var canvas = d3.select("#container").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 8]).on("zoom", zoom))
    .node().getContext("2d");


  function zoom() {
    canvas.clearRect(0, 0, width, height);
    draw();
  }

  function draw() {
    var i = -1, n = dataStore.length, d, cx, cy;
    while (++i < n) {
      canvas.beginPath();
      d = dataStore[i];
      cx = x(d[0]);
      cy = y(d[1]);
      canvas.fillStyle = d[2] 
      canvas.moveTo(cx, cy)
      canvas.arc(cx, cy, 2.5, 0, 2 * Math.PI);
      canvas.fill()
      canvas.closePath();
    }
  }

setInterval(draw, 50)

  function addData(data) {
    dataStore[dataStore.length] = [(data.coords[1])*10, (data.coords[0])*10, data.colour] 
  } ;

  socket.on('object', function(data){

  addData(data);

  canvas.beginPath();
  cx = x((data.coords[1]*10));
  cy = y((data.coords[0])*10);
  canvas.arc(cx, cy, 2, 0, 2 * Math.PI, false);
  canvas.fillStyle = data.colour;
  canvas.fill();
  canvas.closePath();

  })
})
