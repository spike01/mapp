var wordAccumulator = {};
var moodWords;

function wordCounter(data) {
	moodWords = Object.keys(data.moodWords)
	moodWords.forEach(function(word) {
	var wordFreq = 0;
	if(wordAccumulator[word] !== null) { 
		wordFreq += 1 
	}
	wordAccumulator[word] = { sent: data.moodWords[word], freq: wordFreq }

	});
}