exports.formatTweet = function(tweet) {
  return  { text: tweet.text,
            coords: [ tweet.geo.coordinates[1]+180, tweet.geo.coordinates[0]+90 ],
            lang: tweet.lang
          };
};
