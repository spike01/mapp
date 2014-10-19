socketStripper = require('../../src/socketStripper.js').socketStripper

describe('socketStripper', function() {

	it('returns an object containing coordinates', function() {
		expect(socketStripper(sadTweet).coords).toEqual([ -26.15903, 27.92473 ]);
	});

	it('returns an object containing a colour', function() {
		expect(socketStripper(sadTweet).colour).toEqual('red');
	});
})
