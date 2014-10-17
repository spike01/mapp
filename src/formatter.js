var format = function format(tweet){
  return  { text: tweet.text,
            coords: tweet.geo.coordinates,
            lang: tweet.lang,
            sentiment: 0
          };
}

module.exports = format;