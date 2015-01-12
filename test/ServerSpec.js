var server = require('../server');
chai = require('chai')
expect = chai.expect
var Browser = require('zombie')

describe('homepage', function() {

  var browser;

  before(function() {
    console.log(this);
    this.server = server.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  describe('when visiting the homepage', function(){

    before(function(done) {
      browser.visit('/', done);
    });

    it('Returns response code 200', function(){
      expect(browser.success).to.be.true
    });
  });

});
