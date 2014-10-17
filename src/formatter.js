function format(tweet){
  return {  text: tweet.text,
            coords: tweet.geo.coordinates,
            lang: tweet.lang,
            sentiment: 0 };
}