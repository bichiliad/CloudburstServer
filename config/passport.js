var mongoose = require('mongoose'),
    SoundcloudStrategy = require('passport-soundcloud').Strategy;

module.exports = function (passport, keys) {

  // Serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize sessions
  passport.deserializeUser(function (id, done) {
    User.findOne( { _id: id }, function (err, user) {
      done(err, user);
    });
  });

  // Use Soundcloud strategy
  passport.use(new SoundcloudStrategy(keys.soundcloud,

    function(accessToken, refreshToken, profile, done) {
      User.findOne({ 'soundcloud.id': profile.id }, function (err, user) {
        if(err) { return done(err) }
        if(!user) {
          console.log("NEW USER!", profile);
          // TODO: Create new user
        }
      });
    }
  ));
};
