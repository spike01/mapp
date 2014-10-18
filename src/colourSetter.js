exports.pickColour = function(sentiment) {
  if(sentiment > 0) {
    colour = 'yellow'
  } else if(sentiment < 0) {
    colour = 'red'
  } else {
    colour = '#54A6E4'
  }

  return colour
}