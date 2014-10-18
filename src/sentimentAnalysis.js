var sentimentLookup = require('./sentiments/sentimentLookup.js').sentimentLookup;
var sentiment;

exports.analyseSentiment = function (object) {
	sentiment = 0;
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
  sentiment += sentimentLookup[lang][word];
}