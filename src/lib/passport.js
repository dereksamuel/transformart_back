const passport = require("passport");
const LocalStrategy = require("passport-local");

const authenticate = () => {
  passport.use(new LocalStrategy.Strategy((username, password, done) => {
    // before User here
    passport.findOne({ username }, (error, user) => {
      if (error) {
        console.error(error);
        return done(error);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  }));
};

module.exports = authenticate;
