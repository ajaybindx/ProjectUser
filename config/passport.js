const LocalStrategy = require('passport-local').Strategy;
const Register = require('.././modules/Register/register.model');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
  // Local Strategy
  passport.use(new LocalStrategy(function (email, password, done) {
    // Match Username
    let query = { email: email };
    Register.findOne(query, function (err, register) {
      if (err) return err;
      if (!register) {
        return done(null, false, { message: 'Not Registered ,please register first' });
      }

      // Match Password
      bcrypt.compare(password, register.password, function (err, isMatch) {
        if (err) return err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    });
  }));

  passport.serializeUser(function (register, done) {
    done(null, register.id);
  });

  passport.deserializeUser(function (id, done) {
    Register.findById(id, function (err, register) {
      done(err, register);
    });
  });
}
