exports.stripPunctuationOf = function (object) {
  var words = _removePunctuation(object.text).split(' ');
  var language = object.lang;
  return { words: words, lang: language }

}

//private

function _removePunctuation(text) {
  return text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
}
