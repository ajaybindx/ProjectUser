const passport = require('passport');


// Login Form
const loginpage = (req, res) => {
    res.send({ massage: 'your at login api' });
};

// Login Process
const postlogin = (req, res, next) => {
    passport.authenticate('local')
    .then(res.send({massage:'Login Sucessfull'}))

    
      
};

module.exports = { loginpage, postlogin };
