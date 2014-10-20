var sentimentLookup = require('./sentiments/sentimentLookup.js').sentimentLookup;


exports.analyseSentiment = function (object) {
	sentiment = 0, 
  count = 0, 
  sentimentAccumulation = 0;
  object.words.forEach(function(word) {
    if(sentimentLookup[object.lang]) {
    	if(sentimentLookup[object.lang][word]) {
      		_updateSentiment(object.lang, word);
  		}
    }
  })
  return sentiment;
}

//private

function _updateSentiment(lang, word) {
  count += 1
  sentimentAccumulation += sentimentLookup[lang][word];
  sentiment = ( sentimentAccumulation / count );
}