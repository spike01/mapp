this.format = function (tweet){
  return  { text: tweet.text,
            coords: [ tweet.geo.coordinates[0]+90, tweet.geo.coordinates[1]+180 ],
            lang: tweet.lang,
            sentiment: 0
          };
}
