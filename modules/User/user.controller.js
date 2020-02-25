
const User = require('./user.model');

// getUser  function 
const getUser = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }

        res.send(users);

    });
}



module.exports = { getUser };