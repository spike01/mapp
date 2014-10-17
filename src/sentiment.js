var sentiment = 0;

function analyseSentiment(text, lang) {
  var sentence = _removePunctuation(text).split(' ');
  sentence.forEach(function(word) {
    if(sentimentLookup[lang][word]) {
      _updateSentiment();
    }
  })
  return sentiment;
}

//private

function _removePunctuation(text) {
  return text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
}

function _updateSentiment(tweet, word) {
  sentiment += sentimentLookup[tweet.lang][word];
}

module.exports = sentiment;

