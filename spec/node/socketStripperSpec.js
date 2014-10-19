stripForSocket = require('../../src/socketStripper.js').stripForSocket

describe('stripForSocket', function() {

	it('returns an object containing coordinates', function() {
		expect(stripForSocket(sadTweet).coords).toEqual([ -26.15903, 27.92473 ]);
	});

	it('returns an object containing a colour', function() {
		expect(stripForSocket(sadTweet).colour).toEqual('red');
	});
})
