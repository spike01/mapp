var sentiment;

function analyseSentiment(text, lang) {
  sentiment = 0;
  var words = _removePunctuation(text).split(' ');
  words.forEach(function(word) {
    if(sentimentLookup[lang][word]) {
      _updateSentiment(lang, word);
    }
  })
  return sentiment;
}

//private

function _removePunctuation(text) {
  return text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
}

function _updateSentiment(lang, word) {
  sentiment += sentimentLookup[lang][word];
}

module.exports = sentiment;