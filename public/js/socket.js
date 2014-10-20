$(document).ready(function(){

  var socket = io.connect('/');

  var dataStore = [];
  var canvas, x, y, tweetNumber = 0;

  window.onload = window.onresize = function() {

    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
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

    $('#tweetCount').css('top', height-100 + "px")
    $('#reset').css('top', height-97 + "px")
    $('#stopConnection').css('top', height-97 + "px")
    $('#startConnection').css('top', height-97 + "px")

    zoom()
  
  }

  function zoom() {
    canvas.clearRect(0, 0, width, height);
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

  socket.on('object', function(data){
    if(stopped === false) {
      addData(data);
      tweetNumber += 1;
      $('#tweetNumber').text(tweetNumber + ' ');
      canvas.beginPath();
      cx = x((data.coords[1]*ratio));
      cy = y((data.coords[0])*ratio);
      canvas.arc(cx, cy, radius, 0, 2 * Math.PI, false);
      canvas.fillStyle = data.colour;
      canvas.fill();
      canvas.closePath();
    }
  })

  $('#reset').on('click', function(){
    tweetNumber = 0;
    $('#tweetNumber').text(tweetNumber + ' ');
    canvas.clearRect(0, 0, width, height);
    dataStore = [];
  })

  var stopped = false;

  $('#stopConnection').on('click', function(){
    stopped = true;
  })

  $('#startConnection').on('click', function(){
    stopped = false;
  })
  
})