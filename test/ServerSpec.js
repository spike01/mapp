var server = require('../server');
chai = require('chai')
expect = chai.expect
var Browser = require('zombie')

describe('homepage', function() {

  var browser;

  before(function() {
    this.server = server.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    browser.visit('/', done);
  });

  it('Returns response code 200 when visiting the homepage', function(){
      expect(browser.success).to.be.true
  });

  it('Returns response code 404 when visiting a page not listed in the routes', function(){
      expect(browser.success).to.be.true
  });
});
