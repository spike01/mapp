var canvas, x, y, width, height, ratio, radius, x_min, y_min;

window.onload = window.onresize = function() {

  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  width = viewportWidth;
  height = viewportWidth / 2;
  ratio = viewportWidth / 360;
  radius = viewportWidth / 1000;

  $('#intro').css('height', height-200 + 'px');

  x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

  canvas = d3.select("#map")
    .attr("width", width)
    .attr("height", height)
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 400]).on("zoom", zoom))
    .node().getContext("2d");

    
  zoom();

};

function canvasReset() {
  canvas.clearRect(0, 0, width, height);
}

  x_min = 0;
  x_max = width;
  y_min = 0;
  y_max = height;

function zoom() {
   if (x.domain()[0] < x_min) {
    zoom.translate([zoom.translate()[0] - x(x_min) + x.range()[0], zoom.translate()[1]]);
  } else if (x.domain()[1] > x_max) {
    zoom.translate([zoom.translate()[0] - x(x_max) + x.range()[1], zoom.translate()[1]]);
  }

  if (y.domain()[0] < y_min) {
    zoom.translate([zoom.translate()[0], zoom.translate()[1] - y(y_min) + y.range()[0]]);
  } else if (y.domain()[1] > y_max) {
    zoom.translate([zoom.translate()[0], zoom.translate()[1] - y(y_max) + y.range()[1]]);
  }

 canvasReset();
  draw();
}
