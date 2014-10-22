var formatTweet = require('./tweetFormatter.js').formatTweet;
var stripPunctuationOf = require('./punctuationStripper.js').stripPunctuationOf;
var analyseSentiment = require('./sentimentAnalysis.js').analyseSentiment;
var pickColour = require('./colourPicker.js').pickColour;
var stripForSocket = require('./socketStripper.js').stripForSocket;

exports.streamProcess = function(object) {

    var formattedObject, strippedObject, sentiment, processedObject;

    formattedObject = formatTweet(object);
    strippedObject = stripPunctuationOf(formattedObject);
    sentiment = analyseSentiment(strippedObject);
    formattedObject.colour = pickColour(sentiment.averageSentiment);
    processedObject = stripForSocket(formattedObject);

    processedObject.moodWords = sentiment.moodWords;
    processedObject.text = object.text;
    processedObject.username = object.user.name;

    return processedObject;
}
