var events = require('events');
var eventEmitter = new events.EventEmitter();

exports.emit = function(str, callback) {
    eventEmitter.emit(str, callback);
}

exports.on = function(str, callback) {
    eventEmitter.on(str, callback);
}

