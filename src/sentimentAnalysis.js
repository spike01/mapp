var sentimentLookup = require('./sentiments/sentimentLookup.js').sentimentLookup;
var sentiment, count, sentimentAccumlation, moodWords

exports.analyseSentiment = function (object) {
	sentiment = 0;
  count = 0;
  sentimentAccumulation = 0;
  moodWords = {};
  _wordLookup(object);
  return  { averageSentiment: sentiment, moodWords: moodWords };
}

//private

function _updateSentiment(lang, word) {
  count += 1;
  sentimentAccumulation += sentimentLookup[lang][word];
  sentiment = ( sentimentAccumulation / count );
}

function _wordLookup(object) {
  var lookup = sentimentLookup[object.lang];
  object.words.forEach(function(word) {
    if(lookup) {
      if(lookup[word]) {
          _updateSentiment(object.lang, word);
          moodWords[word] = lookup[word];

      }
    }
  });
}
