function removePunctuation(text) {
	return text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
}

function updateSentiment(tweet, word) {
	tweet.sentiment += sentimentLookup[tweet.lang][word];
}

function analyseSentiment(tweet) {
	var tweetText = tweet.text;
	var sentence = removePunctuation(tweetText).split(' ');
	sentence.forEach(function(word) {
    	if(sentimentLookup[tweet.lang][word]){
    		updateSentiment(tweet, word);
    	}
 	})

}
