var request = require('supertest')
  , app     = require('../server.js');


// Make sure the server pongs when pinged.   
describe('GET /ping', function(){
  it('returns "pong"', function(done) {
    request(app)
      .get('/ping')
      .expect('Content-Type', /text/)
      .expect('Cache-control', /no-cache/)
      .expect(200, /pong/, done);
  });
});
