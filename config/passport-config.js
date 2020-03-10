const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user-model')
const keys = require('./keys')

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  //verify id
  User.findById(id).then((user) => {

    done(null, user);
  })
})
passport.use(new GoogleStrategy(keys.google,
  async (accessToken, refreshToken, profile, done) => {
    let currentUser = await User.findOne({ googleId: profile.id })
    if (!currentUser) {
      let newUser = await new User({
        username: profile.displayName,
        googleId: profile.id,
        thumbnail: profile._json.picture
      }).save();

      // console.log("newuser:" + newUser)
      done(null, newUser);

    } else {
      // console.log("currentUser:" + currentUser)
      done(null, currentUser);
    }

  })
)