var request = require('supertest')
  , app     = require('../server.js');

// Houston, is the index page there?
describe('GET /', function(){
  it('returns an html index page', function(done) {
    request(app)
      .get('/')
      .expect('Content-type', /html/)
      .expect(200, done);
  });
});
